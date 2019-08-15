const insertInMiddle = (array, element) => {
    if (array.length % 2 !== 0) {
        const middlePosition = Math.floor(array.length / 2);
        array[middlePosition] = element;
    }
    else {
        const middlePosition = Math.ceil(array.length / 2);
        array.splice(middlePosition, 0, element);
    }
    return array;
}
console.log(insertInMiddle([1, 2, 3], 4));