const getMaxSubSum = array => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] < array[index + 1]) {
            sum += array[index];
        }
    }
}