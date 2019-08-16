const filterRangeInPlace = (array, from, to) => {
    for (let index = 0; index < array.length; index++) {
        console.log(index);
        if (array[index] < from || array[index] > to) {
            array.splice(index, 1);
            index--;
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

filterRangeInPlace(arr, 3, 6);
console.log(arr);
