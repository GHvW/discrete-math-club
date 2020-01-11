import { Proposition } from "./proposition";

const arrgen = <A>({ val, count, arr = []}: { val: A; count: number; arr?: A[]; }): A[] => {
    if (count === 0) {
        return arr;
    }

    arr.push(val);

    return arrgen({ val: val, count: count - 1, arr: arr });
};


const makeTable = (table: boolean[][]) => {
    const arr = table[table.length - 1];
    if (!arr.some(val => val === false)) {

    }

    // use zip *when it gets added
    const nextArr = arr.map((val, i) => {
        const endIndex = arr.length - 1;
        if (val === true && i !== endIndex && arr[i + 1]) {

        }

        return val;
    });

    table.push(nextArr);
    return table;
};

const truthTable = (...propositions: Proposition[]) => {
    const propCount = propositions.length;
    const start = arrgen({ val: false, count: propCount });


    return makeTable()
};
