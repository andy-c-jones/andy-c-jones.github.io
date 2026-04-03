interface EntryWithSlug {
    id: string;
    slug?: string;
}

export function getEntrySlug(entry: EntryWithSlug): string {
    const rawSlug = entry.slug && entry.slug.length > 0 ? entry.slug : entry.id;
    return rawSlug.replace(/\\/g, "/").replace(/\.(md|mdx)$/i, "");
}
