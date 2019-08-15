const readNumber = () => {
    let counter = 0;
    while (true) {
        const number = +prompt('Enter a number', '');
        if (!isNaN(number)) {
            console.log(Number(number));// eslint-disable-line no-console

            break;
        }
        counter++;
        if (counter > 5) {
            break;
        }
    }
}
readNumber();