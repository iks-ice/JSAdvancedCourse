const readNumber = () => {
    let counter = 0;
    while (true) {
        const number = +prompt('Enter a number', '');
        if (!isNaN(number)) {
            console.log(Number(number));
            /* eslint-disable */

            alert('foo');

            /* eslint-enable */
            break;
        }
        counter++;
        if (counter > 5) {
            break;
        }
    }
}
readNumber();