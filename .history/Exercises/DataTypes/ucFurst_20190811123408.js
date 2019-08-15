const ucFirst = str => {
    let gf = str.split('').map((char, index) => {
        index === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
    console.log(gf);
}
ucFirst('dfcz');