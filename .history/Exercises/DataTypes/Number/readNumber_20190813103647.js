const Console = message => {throw new Error(message)};
const readNumber = () => {
    let counter = 0;
    while (true) {
        const number = +prompt('Enter a number', '');
        if (!isNaN(number)) {
            Console(Number(number));
            break;
        }
        counter++;
        if (counter > 5) {
            break;
        }
    }
}
readNumber();