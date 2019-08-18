let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};

let users = [vasya, petya, masha];

const getProps = (arrayOfObjects, prop) => arrayOfObjects.map(obj => obj[prop]);

let names = getProps(users, 'name');
console.log(names);

