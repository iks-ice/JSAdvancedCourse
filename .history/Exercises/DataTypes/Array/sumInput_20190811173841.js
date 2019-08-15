const sumInput = () => {
    const inputs = [];
    while (true) {
        const input = prompt('Enter a number', '');
        if (input === '' || isNaN(input)) {
            inputs.push(number);
            console.log(inputs);
            break;
        } else {
            break;
        };
    }
    return inputs.reduce((input, sum) => input + sum, 0);
}
sumInput();
console.log(isFinite(''));