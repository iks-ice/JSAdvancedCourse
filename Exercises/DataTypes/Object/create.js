// let a = Object.create(null);

// console.log(a);

// const createPropertName = (str) => `${new Date()} : ${str}`;

// a[createPropertName('it is a first property')] = 'just string';

// let b = Object.create(a);
// console.log(b);

// const propertis = {
//     age: 1,
//     get () {
//         console.log(this);
//     }
// };

// let c = {
//     propertis
// }


// Object.assign(a, {'it is a first property': 5}, c);
// console.log(a);

let a = {
    keyA: 1
}
let b = {
    keyB: 2
}
// {...a, ...b, ...{keyC: 3}};

a.keyA = {keyA: 1};
let c = Object.assign({}, a, b, {keyC: 3});
console.log(c);
