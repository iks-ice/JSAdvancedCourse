const checkSpam = str => {
    const spam = ['viagra', 'xxx'];
    return spam.some(word => str.indexOf(word) >= 0);
}
console.log(checkSpam('reher'));