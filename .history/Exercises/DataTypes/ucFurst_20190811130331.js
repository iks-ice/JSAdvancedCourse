const ucFirst = str => {
    const first = str[0].toUpperCase();
    return first + str.slice(1);

}
console.log(ucFirst('dfcz'));