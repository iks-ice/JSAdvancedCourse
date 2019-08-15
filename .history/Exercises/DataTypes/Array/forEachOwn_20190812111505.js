const array = [1, 2, 3];
array.forEachMine = (callback = () => {}) => {
    for (let i = 0; i < 3; i++) {
        console.log(this);
        callback(i);
    };
};
array.forEachMine((i) => console.log(i));