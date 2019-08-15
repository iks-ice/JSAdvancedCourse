const sumInput = () => {
    const inputs = [];
    while (true) {
        const input = prompt('Enter a number', '');
        if (input === '' || isNaN(input)) {
            console.log('empty');
            break;
        } else {
            inputs.push(input);
        };
    }
    return inputs.reduce((input, sum) => input + sum, 0);
}
console.log(sumInput());