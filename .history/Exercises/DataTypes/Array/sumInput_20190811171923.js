const sumInput = () => {
    const inputs = [];
    while (true) {
        const number = +prompt('Enter a number', '');
        if (!isNaN(number)) {
            inputs.push(number);
        } else {
            console.log(number);
            break;
        };
    }
    return inputs.reduce((input, sum) => input + sum, 0);
}
sumInput();