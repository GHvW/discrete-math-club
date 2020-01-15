import katex from "katex";
import { div, p, h1, section } from "./funcy/ele";
import { conditionals } from "./conditional";

export const Katex = (tex: string) => {
    return katex.renderToString(tex, {
        output: "html",
        throwOnError: true
    });
};

// const Section = ({ header, elements }: { header: string, elements: string}) => {
//     return `<h1>${header}</h1><div>${elements}</div>`;
// };

interface ConceptProps {
    title: string;
    tex: string;
    note: string;
}

const Concept = ({ title, tex, note }: ConceptProps) => {
    return div(["class", "box"])(
        p(["class", "title"])(`${title}`),
        p(["class", "subtitle"])(
            Katex(tex),
        ),
        p()(`${note}`)
    );
};

interface SimpleNoteProps {
    title: string;
    notes: string[];
};

const SimpleNote = ({ title, notes }: SimpleNoteProps) => {
    return div(["class", "box"])(
        p(["class", "subtitle"])(`${title}`),
        div()(... notes)
    )
};

const HeroBanner = (size: string = "") => (title: string) => {
    return section(["class", "hero"])(
        div(["class", "hero-body"])(
            div(["class", `container`])(
                h1(["class", `title ${size}`])(title)
            )
        )
    )
};

// const HoverList = ({ text, items }: { text: string, items: string[] }) => {
//     return div(["class", "dropdown is-hoverable"])(
//         div(["class", "dropdown-trigger"])(
//             button(["class", "button"], ["aria-haspopup", "true"], ["aria-controls", "dropdown-menu4"])(
//                 span()(`${text}`)
//             )
//         ),
//         div(["class", "dropdown-menu"], ["id", "dropdown-menu4"], ["role", "menu"])(
//             div(["class", "dropdown-content"])(
//                 ... items
//             )
//         )
//     );
// }

const Hero = HeroBanner();
const Hero1 = HeroBanner("is-1");
// const Hero2 = HeroBanner("is-2");

const Column = div(["class", "column"]);
const Columns = div(["class", "columns"]);

// const start = document.querySelector("#start");
const math = document.querySelector("#math");

const simpleKatex = (tex: string) => katex.renderToString(tex, {
    output: "html",
    throwOnError: true
});

const list = [
    Concept({
        title: "Negation",
        tex: "\\neg p",
        note: "A negation is the opposite of the truth value of p"
    }),
    Concept({ 
        title: "Conjunction", 
        tex: "p \\land q", 
        note: "A conjunction is true if both p and q are true" 
    }),
    Concept({
        title: "Disjunction",
        tex: "p \\lor q",
        note: "A disjunction is true if both p or q is true"
    }),
    Concept({
        title: "Exclusive Or",
        tex: "p \\otimes q",
        note: "Exclusive Or is true if p or q is true, but not both"
    }),
];


if (math?.innerHTML) {
    math.innerHTML = div()(
        Hero1("Basics"),
        Columns(...list.map(concept => Column(concept))),
        Hero("Conditionals"),
        Columns(
            Column(
                Concept({
                    title: "Conditional",
                    tex: "p \\to q",
                    note: `A conditional statement is the proposition "if p, then q".<br>
                        It is false when p is true and q is false. Otherwise it is true.<br>
                        <br>
                        Special conditional statements have their own names:<br>`
                        // converse: ${simpleKatex("q \\to p")}, contapositive: ${simpleKatex("\\neg q \\to \\neg p")}, and inverse: ${simpleKatex("\\neg p \\to \\neg q")}`
                }),
                Columns(
                    Column(SimpleNote({ title: "Converse", notes: [simpleKatex("q \\to p")]})),
                    Column(SimpleNote({ title: "Contrapositive", notes: [simpleKatex("\\neg q \\to \\neg p")]})),
                    Column(SimpleNote({ title: "Inverse", notes: [simpleKatex("\\neg p \\to \\neg q")]})),
                )
            ),
            Column(
                SimpleNote({
                    title: "Common conditional statements",
                    notes: conditionals("p")("q").map(c => p()(c))
                }),
            ),
        )
    );
} 
    