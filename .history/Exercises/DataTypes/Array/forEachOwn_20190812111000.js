const array = [1, 2, 3];
array.forEachMine = (callback = () => {}) => {
    // for (let i = 0; i < this.length; i++) {
    //     callback(this[i], i, this);
    // };
    callback();
};
array.forEachMine(console.log('el'));