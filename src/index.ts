import katex from "katex";

const math = document.querySelector("#math");

const Katex = (tex: string) => {
    const span = document.createElement("span");

    katex.render(tex, span, {
        output: "html",
        throwOnError: true
    });

    return span;
}

math?.appendChild(Katex("\\forall x (P(x) \\to Q(x))"));

