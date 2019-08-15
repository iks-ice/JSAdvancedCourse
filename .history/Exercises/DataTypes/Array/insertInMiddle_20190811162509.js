const insertInMiddle = (array, element) => {
    if (array.length % 2 !== 0) {
        const middlePosition = Math.floor(array.length / 2);
        array.splice(middlePosition, 1, element);
        console.log(Math.floor(array.length / 2));
        return array;
    }
}
console.log(insertInMiddle([1, 2, 3], 4));