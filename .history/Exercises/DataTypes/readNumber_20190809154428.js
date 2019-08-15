while ( true ) {
    const number = prompt( 'Enter a number', '' );
    if ( !Number.isNaN( number ) ) {
        alert( number );
        break;
    }
}