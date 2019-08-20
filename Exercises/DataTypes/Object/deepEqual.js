'use strict';

let a = {
    order: {
        price: 20,
        a: {
            b: 2
        }
    },
    ad: true,
    name: 'Misha',
};

let b = {
    name: 'Misha',
    order: {
        price: 20,
        a: {
            b: 2
        }
    },
    ad: true,
};


// console.log(a === b);
const isEmpty = obj => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

const deepEqual = (obj1, obj2) => {
    // debugger
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 === null || obj2 === null) {
        return false;
    }
    if (typeof obj1 !== 'object' && typeof obj2 !== 'object' && obj1 !== obj2) {
        return false;
    }
    const keysObj1 = Object.keys(obj1);
    const keysObj2 = Object.keys(obj2);
    if (keysObj1.length !== keysObj2.length) {
        return false;
    }

    return keysObj1.every(key => deepEqual(obj1[key], obj2[key]));


}

console.log(deepEqual(a, b));