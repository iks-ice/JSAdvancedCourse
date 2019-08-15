const array = [1, 2, 3];
array.forEachMine = (callback = () => {}) => {
    for (let i = 0; i < 3; i++) {
        callback(this);
    };
};
array.forEachMine((this) => console.log(this));