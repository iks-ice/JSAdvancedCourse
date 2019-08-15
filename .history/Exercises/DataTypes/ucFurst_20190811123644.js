const ucFirst = str => {
    let first = str[0].toUpperCase;
    return str.splice(1, 1, first);
}
console.log(ucFirst('dfcz'));