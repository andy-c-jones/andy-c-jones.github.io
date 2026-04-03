---
title: "Agentic AI & Software Engineering"
date: '2026-04-03'
author: "Andrew 'AJ' Jones"

tags: ['AI', 'Agentic AI', 'Extreme Programming', 'Software Engineering']
categories: ['AI Engineering']

image:
    url: '/images/abstract-hero-01.svg'
    alt: 'abstract flowing shapes in teal, violet and dusk blue'

---

Tools like Claude Code and GitHub Copilot CLI are changing the core tooling of software engineering. They are not just autocomplete tools; they are increasingly capable agents that can navigate codebases, propose designs, generate code, run validation steps, and iterate quickly.

In this world, I still believe pairing is essential. We still need to collaborate on requirements and design conversations. The difference now is that pairing with user experience, quality engineers, subject matter experts, and product professionals can be supercharged by much shorter feedback loops in implementation time.

The quality bar does not go away. If anything, it becomes more important to make validation explicit and automated. Core techniques still matter:
- Benchmarking
- Approval, Acceptance, Contract, Integration, Unit tests
- End-to-end/functional tests (including headless automation)
- Static analysis
- Code coverage tooling
- Profiling
- Local environment telemetry and diagnostics tooling

Platforms like .NET Aspire, especially with [recent CLI capabilities](https://aspire.dev/reference/cli/overview/), make this even more interesting because agents can interact with local environment telemetry directly to validate functional and non-functional behavior.

I believe these techniques are now cheaper to apply because AI can help generate and maintain significant parts of the validation stack. That should make higher quality outcomes more achievable. It still depends on skilled engineering professionals with the right experience, vocabulary, and judgment to pilot the agents.

Looking ahead, I can imagine an ideal pairing model where an expert engineer pairs with an expert product or business analyst and ships high-quality products at high velocity. Specialists in UX, accessibility, security, and computational domains remain highly valuable. Although, when those specialists are not immediately available, the baseline should improve with agentic AI, as long as validation and process automation are treated as first-class parts of the workflow.

I am currently working on changing workplace practices substantially in my own organisation, and I expect that change to continue for several years as more quality automation gets embedded into AI coding tooling. I wrote about workplace change previously in [Changing workplace practices](/posts/changing-workplace-practices/). The shift is affecting engineers in different ways. Some are fearful, or simply sad that ways of working they enjoyed are changing. Others feel less well placed to succeed with these new tools. On the flip side, a number of my colleagues are enjoying programming more than ever before, and some are optimistic because of the engineering practices now possible and the value we can deliver to clients and wider society. In times of significant change, uncertainty is unavoidable and difficult to navigate. I take it very seriously that part of my role as a leader is to help people through that change and so I have spent a lot of time becoming a AI-native engineer to keep up to date.

I also still believe [Test-Driven Development (TDD)](/posts/test-driven-development/) is one of the best processes for humans, and AI has not made it less important for humans to practice it when they are developing software manually. What has changed is that we increasingly rely on agent tooling to execute parts of the validation workflow: making incremental changes, running checks, and surfacing improvement opportunities. Today, users still do a lot of heavy lifting in prompts to push beyond the simplest validations, but agent modes and skills can increasingly coach models to use richer signals such as code coverage, performance checks, and security checks on every change. I do not think the internal process an agent follows is literally TDD in the human sense, because its generation process is based on statistical weighting rather than human-style requirement decomposition. That is acceptable to me as long as we can prove that quality is objectively as good as, or better than, human-only engineering through strong validation techniques. The only challenge is that I don't know what we can call this new quality practice just yet. That makes it hard to communicate the technique to your peers. I do though find Dave Farley's [Modern Software Engineering](https://modernsoftwareengineering.co.uk/) to be a useful framing for the kind of behaviour we need from software professionals particualarly now that there is some low risk, low impact areas of software that may not need software engineers at all, in the same way you don't need a structual engineer to help you build a shed. I have attempted to coin the term LLM-Augemented Outside-in Design at work, but I doubt that will stick because it doesn't roll off the tongue. I see others in the industry attempting co-opt the term TDD to apply it to the agents validation flow and I don't think that really makes sense to do given humans still need to follow the original practice (one test/requirement at a time). Perhaps those voices will win out and perhaps it won't matter if the AI becomes truely ubiquitous. Only time will tell. 

The only time I am not using AI augmentation is when I have no internet connection or my agent is down. Lets hope we can be just as productive with local models in the future, otherwise we will once again be in the position of being serfs in a thiefdom, as Nvidea and others hold all the captial goods in thier token factories.
