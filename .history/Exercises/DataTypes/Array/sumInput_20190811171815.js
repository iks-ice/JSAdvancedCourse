const sumInput = () => {
    const inputs = [];
    while (true) {
        const number = +prompt('Enter a number', '');
        console.log(number);
        if (!isNaN(number)) {
            inputs.push(number);
        } else {
            console.log(number);
            return;
        };
    }
    return inputs.reduce((input, sum) => input + sum, 0);
}
console.log(sumInput());