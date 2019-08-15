const sumInput = () => {
    const inputs = [];
    while (true) {
        const number = +prompt('Enter a number', '');
        console.log(number);
        if (!isNaN(number)) {
            inputs.push(number);
        } else {
            break;
        };
    }
    return inputs.reduce((input, sum) => input + sum, 0);
}
console.log(sumInput());