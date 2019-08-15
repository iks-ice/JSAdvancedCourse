const ucFirst = str => {
    const f = str.split('');
    const first = f[0].toUpperCase();
    f.splice(0, 1, first)
    return f.join('');

}
console.log(ucFirst('dfcz'));