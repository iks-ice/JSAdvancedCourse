const checkSpam = str => {
    const spam = ['viagra', 'xxx'];
    const check = word => str.toLowerCase().includes(word);
    return spam.some(check);
}
console.log(checkSpam('innocen t , ['viagra', 'xxx']));