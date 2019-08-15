const filterRange = (array, from, to) => array.filter(el => el >= from && el <= to);


const arr = [-1, 2, 3, 14, 5, 6];

console.log(filterRange(arr, 2, 9));