let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 29};

let arr = [vasya, petya, masha];

const getAverageAge = array => array.reduce((sum, {age}) => (sum + age), 0) / array.length;

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
