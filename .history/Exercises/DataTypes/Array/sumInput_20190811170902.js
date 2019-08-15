const sumInput = () => {
    const inputs = [];
    while (true) {
        const number = +prompt('Enter a number', '');
        if (!isNaN(number)) {
            console.log(number);
            inputs.push(number);
        } else {
            console.log(number);
            break;
        };
    }
    return inputs.reduce((input, sum) => input + sum);
}
console.log(sumInput());