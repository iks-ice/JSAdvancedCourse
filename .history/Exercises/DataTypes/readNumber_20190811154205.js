const readNumber = () => {
    while (true) {
        const number = prompt('Enter a number', '');
        if (Number(number)) {
            console.log(number);
            break;
        }
    }
}
readNumber();