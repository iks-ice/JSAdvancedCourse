const sumInput = () => {
    const inputs = [];
    while (true) {
        const input = prompt('Enter a number', '');
        if (input === '' || isNaN(input)) {
            break;
        } else {
            inputs.push(number);
        };
    }
    return inputs.reduce((input, sum) => input + sum, 0);
}
sumInput();
console.log(isFinite(''));