'use strict';

let a = {
    order: {
        price: 20,
        a: {
            b: 2
        }
    },
    ad: 2,
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

};


// console.log(a === b);


const deepEqual = (obj1, obj2) => {
    let isEqual = false;

    const keysObj1 = Object.keys(obj1);
    const keysObj2 = Object.keys(obj2);

    if (keysObj1.length !== keysObj2.length) {
        return isEqual;
    }

    const compare = (obj1, obj2) => {
        for (const prop in obj1) {
            if (typeof obj1[prop] === 'object') {
                if (!compare(obj1[prop], obj2[prop])) {
                    return isEqual;
                }
            } else if (obj1[prop] !== obj2[prop]) {
                isEqual = false;
                return isEqual;
            } else {
                isEqual = true;
            }
        }
    }

    compare(obj1, obj2);

    return isEqual;
}

console.log(deepEqual(a, b));