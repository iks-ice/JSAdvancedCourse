const checkSpam = (str, ...spam) => {
    // const spam = ['viagra', 'xxx'];
    if (typeof spam === 'array') {
        console.log('array');
    }
    console.log(spam);
    const check = word => str.toLowerCase().indexOf(word) >= 0;
    return spam.some(check);
}
console.log(checkSpam('innocen t xxxxxx', ['viagra', 'xxx']));