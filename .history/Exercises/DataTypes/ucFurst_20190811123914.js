const ucFirst = str => str.split('').splice(1, 1, str[0].toUpperCase).join('');

console.log(ucFirst('dfcz'));