const sumInput = () => {
    while (true) {
        const inputs = [];
        const number = +prompt('Enter a number', '');
        if (!isNaN(number)) {
            inputs.push(number);
        }
        return inputs.reduce((input, sum) => input + sum);
    }
}
sumInput();