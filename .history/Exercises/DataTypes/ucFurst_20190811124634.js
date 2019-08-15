const ucFirst = str => {
    let first = str[0].toUpperCase;
    const f = str.split('');
    const d = f.splice(1, 1, first);
    return d.join('');

}
console.log(ucFirst('dfcz'));