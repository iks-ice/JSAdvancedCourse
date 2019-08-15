const ucFirst = str => {
    let str = str.split( '' ).map( ( char, index ) => {
        index === 0 ? char.toUpperCase() : char.toLowerCase();
    } ).join();
    console.log( str );
}
ucFirst( 'dfcz' );