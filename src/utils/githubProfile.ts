import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

interface GitHubApiProfile {
    name: string | null;
    bio: string | null;
    html_url: string;
    avatar_url: string;
    followers: number;
    following: number;
    public_repos: number;
    location: string | null;
    company: string | null;
    blog: string;
}

interface CachedProfile {
    cachedAt: string;
    profile: Partial<GitHubProfile>;
}

export interface GitHubProfile {
    name: string;
    bio: string;
    htmlUrl: string;
    avatarUrl: string;
    followers: number;
    following: number;
    publicRepos: number;
    location?: string;
    company?: string;
    website?: string;
}

const CACHE_TTL_MS = 1000 * 60 * 60 * 12;
const cachePath = new URL("../../.cache/github-profile.json", import.meta.url);

function getFallbackProfile(username: string): GitHubProfile {
    return {
        name: "Andrew \"AJ\" Jones",
        bio: "Software Engineer",
        htmlUrl: `https://github.com/${username}`,
        avatarUrl: `https://github.com/${username}.png`,
        followers: 0,
        following: 0,
        publicRepos: 0
    };
}

function hasFreshCache(cachedAt: string): boolean {
    const cachedTime = Date.parse(cachedAt);
    if (Number.isNaN(cachedTime)) {
        return false;
    }
    return Date.now() - cachedTime <= CACHE_TTL_MS;
}

async function readCachedProfile(): Promise<CachedProfile | null> {
    try {
        const raw = await readFile(cachePath, "utf-8");
        return JSON.parse(raw) as CachedProfile;
    } catch (error) {
        if (
            typeof error === "object" &&
            error !== null &&
            "code" in error &&
            error.code === "ENOENT"
        ) {
            return null;
        }
        throw error;
    }
}

function normalizeWebsite(website: string): string | undefined {
    const trimmed = website.trim();
    if (!trimmed) {
        return undefined;
    }
    return trimmed.startsWith("http://") || trimmed.startsWith("https://")
        ? trimmed
        : `https://${trimmed}`;
}

function mapApiProfile(data: GitHubApiProfile, username: string): GitHubProfile {
    return {
        name: data.name ?? "Andrew \"AJ\" Jones",
        bio: data.bio ?? "Software Engineer",
        htmlUrl: data.html_url || `https://github.com/${username}`,
        avatarUrl: data.avatar_url || `https://github.com/${username}.png`,
        followers: data.followers ?? 0,
        following: data.following ?? 0,
        publicRepos: data.public_repos ?? 0,
        location: data.location ?? undefined,
        company: data.company ?? undefined,
        website: normalizeWebsite(data.blog)
    };
}

function normalizeCachedProfile(profile: Partial<GitHubProfile>, username: string): GitHubProfile {
    return {
        name: profile.name ?? "Andrew \"AJ\" Jones",
        bio: profile.bio ?? "Software Engineer",
        htmlUrl: profile.htmlUrl ?? `https://github.com/${username}`,
        avatarUrl: profile.avatarUrl ?? `https://github.com/${username}.png`,
        followers: profile.followers ?? 0,
        following: profile.following ?? 0,
        publicRepos: profile.publicRepos ?? 0,
        location: profile.location,
        company: profile.company,
        website: profile.website
    };
}

async function writeCachedProfile(profile: GitHubProfile): Promise<void> {
    const cacheFilePath = fileURLToPath(cachePath);
    await mkdir(dirname(cacheFilePath), { recursive: true });
    await writeFile(
        cachePath,
        JSON.stringify({ cachedAt: new Date().toISOString(), profile }, null, 2),
        "utf-8"
    );
}

async function fetchGitHubProfile(username: string): Promise<GitHubProfile> {
    const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            Accept: "application/vnd.github+json",
            "User-Agent": "darkpeak-site"
        }
    });
    if (!response.ok) {
        throw new Error(`GitHub profile request failed with ${response.status}`);
    }
    const data = (await response.json()) as GitHubApiProfile;
    return mapApiProfile(data, username);
}

export async function getGitHubProfile(username: string): Promise<GitHubProfile> {
    const cached = await readCachedProfile();
    if (cached && hasFreshCache(cached.cachedAt)) {
        const normalizedCachedProfile = normalizeCachedProfile(cached.profile, username);
        if (!cached.profile.avatarUrl) {
            await writeCachedProfile(normalizedCachedProfile);
        }
        return normalizedCachedProfile;
    }

    try {
        const profile = await fetchGitHubProfile(username);
        await writeCachedProfile(profile);
        return profile;
    } catch (error) {
        if (cached) {
            console.warn("Using cached GitHub profile due to fetch failure:", error);
            return normalizeCachedProfile(cached.profile, username);
        }
        console.warn("Using fallback GitHub profile due to fetch failure:", error);
        return getFallbackProfile(username);
    }
}
