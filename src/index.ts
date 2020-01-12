import katex from "katex";


// const Katex = (tex: string) => {
//     const span = document.createElement("span");

//     katex.render(tex, span, {
//         output: "html",
//         throwOnError: true
//     });

//     return span;
// };

const Katex = (tex: string) => {
    return katex.renderToString(tex, {
        output: "html",
        throwOnError: true
    });
};

// const Section = (header: string) => {
//     const h2 = document.createElement("h2");

//     h2.textContent = header;

//     return h2;
// };

const Section = ({ header, elements }: { header: string, elements: string}) => {
    return `<h1>${header}</h1><div>${elements}</div>`;
};

interface Concept {
    title: string;
    tex: string;
    note: string;

}

const Concept = ({ title, tex, note }: Concept) => {
    const span = document.createElement("span");


};

const start = document.querySelector("#start");
const math = document.querySelector("#math");

const list = [];

// start?.appendChild(Section("Basics"));
// math?.appendChild(Katex("\\forall x (P(x) \\to Q(x))"));

if (math?.innerHTML) {
    math.innerHTML = Katex("\\forall x");
} 
    