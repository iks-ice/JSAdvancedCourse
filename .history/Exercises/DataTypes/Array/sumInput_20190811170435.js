const sumInput = () => {
    const inputs = [];
    while (true) {
        const number = +prompt('Enter a number', '');
        if (!isNaN(number)) {
            inputs.push(number);
        } else break;
    }
    return inputs.reduce((input, sum) => input + sum);
}
console.log(sumInput());