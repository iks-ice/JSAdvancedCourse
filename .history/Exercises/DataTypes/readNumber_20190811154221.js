const readNumber = () => {
    while (true) {
        const number = prompt('Enter a number', '');
        if (Number(number)) {
            console.log(Number(number));
            break;
        }
    }
}
readNumber();