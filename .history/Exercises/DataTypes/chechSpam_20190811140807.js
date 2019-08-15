const checkSpam = (str, ...spam) => {
    // const spam = ['viagra', 'xxx'];
    const check = word => str.toLowerCase().indexOf(word) >= 0;
    return spam.some(check);
}
console.log(checkSpam('innocen t xxxxxx', ['viagra', 'xxx']));