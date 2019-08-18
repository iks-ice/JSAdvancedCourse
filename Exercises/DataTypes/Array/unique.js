// const unique = arr => Array.from(new Set(arr));
const unique = arr => {
    const un = [];
    for (const el of arr) {
        if (!un.includes(el)) {
            un.push(el);
        }
    }
    return un;
};


let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O