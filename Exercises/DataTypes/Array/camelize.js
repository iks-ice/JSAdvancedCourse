const camelize = str => {
    const firstLetterToUpperCase = (word, index) => {
        if (index > 0) {
            const firstLetter = word[0].toUpperCase();
            word = firstLetter + word.slice(1);
        }
        return word;
    }

    return str.split('-').map(firstLetterToUpperCase).join('');
}

console.log(camelize('-webkit-transition'));
