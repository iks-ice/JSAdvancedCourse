while ( true ) {
    const number = prompt( 'Enter a number', '' );
    if ( typeof Number( number ) === 'number' ) {
        alert( number );
        break;
    }
}