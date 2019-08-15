const readNumber = () => {
    let counter = 0;
    while (true) {
        const number = prompt('Enter a number', '');
        if (Number(number).isFinite()) {
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