let vasya = {name: "Вася", surname: "Пупкин", id: 1};
let petya = {name: "Петя", surname: "Иванов", id: 2};
let masha = {name: "Маша", surname: "Петрова", id: 3};

let users = [vasya, petya, masha];

const getUsersMapped = (arrayOfObjects, newProp, oldProp1, oldProp2, oldProp3) =>
    arrayOfObjects.map(obj => ({
        [newProp]: `${obj[oldProp1]} ${obj[oldProp2]}`,
        [oldProp3]: obj[oldProp3]
    }));
let usersMapped = getUsersMapped(users, 'fullName', 'name', 'surname', 'id');
console.log(usersMapped);

