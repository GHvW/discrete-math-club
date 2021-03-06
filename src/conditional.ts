
export const conditionals = (p: string) => (q: string) => {
    return [
        `if ${p}, then ${q}`,
        `if ${p}, ${q}`,
        `${p} is sufficient for ${q}`,
        `${q} if ${p}`,
        `${q} when ${p}`,
        `a necessary condition for ${p} is ${q}`,
        `${q} unless not ${p}`,
        `${p} implies ${q}`,
        `${p} only if ${q}`,
        `a sufficient condition for ${q} is ${p}`,
        `${q} whenever ${p}`,
        `${q} is necessary for ${p}`,
        `${q} follows from ${p}`
    ];
}