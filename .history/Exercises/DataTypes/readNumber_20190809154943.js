while ( true ) {
    const number = prompt( 'Enter a number', '' );
    if ( typeof number === 'number' ) {
        alert( number );
        break;
    }
}