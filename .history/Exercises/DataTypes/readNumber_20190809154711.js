while ( true ) {
    const number = prompt( 'Enter a number', '' );
    if ( typeof number === Number ) {
        alert( number );
        break;
    }
}