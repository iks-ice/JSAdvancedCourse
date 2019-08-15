const getMaxSubSum = array => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] > 0) {
            sum += array[index];
        }
    }
    console.log(sum);
}
getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([2, -1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]);
getMaxSubSum([-2, -1, 1, 2]);
getMaxSubSum([100, -9, 2, -3, 5]);
getMaxSubSum([1, 2, 3]);