const readNumber = () => {
    while (true) {
        // const number = prompt('Enter a number', '');
        if (Number(prompt('Enter a number', ''))) {
            console.log(Number(number));
            break;
        }
    }
}
readNumber();