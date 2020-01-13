type Attribute = [string, string];

// type CreateElement = (tag: string) => (...attr: Attribute[]) => (...elements: string[]) => string;

export const h = (tag: string) => (...attr: Attribute[]) => (...elements: string[]) => {
    const attributes = attr.reduce((attrs, [key, val]) => `${attrs} ${key}="${val}"`, "");
    const eles = elements.reduce((eles, next) => `${eles}${next}`);
    
    return `<${tag} ${attributes}>${eles}</${tag}>`;
};

export const p = h("p");
export const span = h("span");
export const div = h("div");
export const h1 = h("h1");
export const h2 = h("h2");
export const h3 = h("h3");
export const h4 = h("h4");
export const h5 = h("h5");
export const h6 = h("h6");
export const article = h("article");
export const section = h("section");
export const ul = h("ul");
export const ol = h("ol");
export const li = h("li");
export const button = h("button");
