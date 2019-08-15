const readNumber = () => {
    let counter = 0;
    while (true) {
        /* eslint-disable no-debugger */
        debugger;
        /* eslint-enable no-debugger */
        const number = +prompt('Enter a number', '');
        if (!isNaN(number)) {
            console.log(Number(number));
            break;
        }
        counter++;
        if (counter > 5) {
            break;
        }
    }
}
readNumber();