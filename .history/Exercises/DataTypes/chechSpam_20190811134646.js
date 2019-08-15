const checkSpam = str => {
    const spam = ['viagra', 'xxx'];
    const check = word => str.toLowerCase().indexOf(word) >= 0;
    return spam.some(check);
}
console.log(checkSpam('vIagra'));