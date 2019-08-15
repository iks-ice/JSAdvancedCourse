const checkSpam = str => {
    const spam = ['viagra', 'xxx'];
    return spam.some(word => str.toLowerCase().indexOf(word) >= 0);
}
console.log(checkSpam('vIagra'));