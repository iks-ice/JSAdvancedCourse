const revertedSort = array => array.sort((a, b) => a - b).reverse();

const arr = [-1, 2, 3, 24, -5, 6, 7, -8, 9, 10,];

console.log(revertedSort(arr));
