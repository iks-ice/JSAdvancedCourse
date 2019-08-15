const getMaxSubSum = array => {
    let sum = [];
    sum[0] = array[0];
    let sumIndex = 0;
    for (let index = 1; index < array.length; index++) {
        if (array[index] > sum[sumIndex]) {
            sum[sumIndex] += array[index];
        } else {
            sumIndex++;
            sum[sumIndex] = array[index];
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