const array = [1, 2, 3];
array.forEachMine = function (callback = () => {}) {
    for (let i = 0; i < 3; i++) {
        callback(this);
    };
};
array.forEachMine((i) => console.log(i));