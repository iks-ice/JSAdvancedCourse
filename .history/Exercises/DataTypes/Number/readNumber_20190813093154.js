const readNumber = () => {
    let counter = 0;
    while (counter > -1) {      /* eslintrc prohibits while(true) condition */
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