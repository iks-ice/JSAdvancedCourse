const ucFirst = str => {
    let first = str[0].toUpperCase;
    return str.split('').splice(1, 1, first).join('');

}
console.log(ucFirst('dfcz'));