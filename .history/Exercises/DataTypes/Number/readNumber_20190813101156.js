const readNumber = () => {
    let counter = 0;
    while (true) {
        console.log('hdjkjs');
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