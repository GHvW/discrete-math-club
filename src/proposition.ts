export interface Variable {
    kind: "var";
    p: string;
}

export interface Negation {
    kind: "neg";
    p: Proposition;
    op: "\\neg";
}

export interface Predicate {
    kind: "pred";
    p: Proposition;
    op: (fn: string, s: string) => string;
}

export interface Conditional {
    kind: "cond";
    p: Proposition;
    q: Proposition;
    op: "\\to"
}

export type Proposition
    = Variable
    | Negation
    | Conditional


export const texVariable = (variable: Variable) => {
    return variable.p;
}

export const texNegation = ({ p, op }: Negation) => {
    return `${op} ${p}`;
}

export const texConditional = ({ p, q, op }: Conditional) => {
    return `${p} ${op} ${q}`
}