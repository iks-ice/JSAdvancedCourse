const array = [1, 2, 3];

array.forEachMine = function (callback = () => {}) {
    for (let i = 0; i < 3; i++) {
        callback(this[i], i, this);
    };
};
array.forEachMine((el) => console.log(el));


Array.prototype.forEach = function (callback = () => {}) {
    for (let i = 0; i < 3; i++) {
        callback(i);
    };
};
array.forEach(i => console.log(i));