const array = [1, 2, 3];
console.log('hi');
array.forEachMine = (callback = () => {}) => {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    };
};
array.forEachMine(el => console.log(el));