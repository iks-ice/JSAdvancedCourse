const readNumber = () => {
    let counter = 0;
    while (true) {
        const number = +prompt('Enter a number', '');
        if (!isNaN(number)) {
            // eslint-disable-next-line no-console
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