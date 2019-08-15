const styles = ['jazz', 'bluz'];

styles.push('rock\'n\'roll');

const insertInMiddle = (array, element) => {
    if (array.length % 2 !== 0) {
        const middlePosition = Math.floor(array.length / 2);
        array[middlePosition] = element;
    }
    else {
        const middlePosition = Math.ceil(array.length / 2);
        array.splice(middlePosition, 0, element);
    }
    return array;
}
insertInMiddle(styles, 'classic');
console.log(styles);