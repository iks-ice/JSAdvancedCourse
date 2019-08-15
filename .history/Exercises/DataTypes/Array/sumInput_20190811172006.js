const sumInput = () => {
    const inputs = [];
    while (true) {
        const number = +prompt('Enter a number', '');
        if (!isNaN(number)) {
            inputs.push(number);
            console.log(inputs);
        } else {
            break;
        };
    }
    return inputs.reduce((input, sum) => input + sum, 0);
}
sumInput();