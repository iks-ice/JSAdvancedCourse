const ucFirst = str => {
    let str = str.split( '' ).map( ( char, index ) => {
        char.toUperCase();
        break;
    } ).join();
    console.log( str );
}