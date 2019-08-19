'use strict';

let a = {
    order: {
        price: 20,
        a: {
            b: 2
        }
    },
    ad: false,
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
    ad: NaN,
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
    let isEqual = false;

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return isEqual;
    }

    const compare = (obj1, obj2) => {
        for (const prop in obj1) {
            if (typeof obj1[prop] === 'object') {
                if ((isEmpty(obj1[prop]) && isEmpty(obj2[prop]))
                    || (obj1[prop] === null && obj2[prop] === null)) {
                    isEqual = true;
                } else if (!compare(obj1[prop], obj2[prop])) {
                    return isEqual;
                }
            } else if ((isNaN(obj1[prop]) && isNaN(obj2[prop]))) {
                isEqual = true;
            } else if (obj1[prop] == obj2[prop]) {
                isEqual = true;
            } else {
                return isEqual = false;
            }
        }
        return isEqual;
    }

    compare(obj1, obj2);

    return isEqual;
}

console.log(deepEqual(a, b));