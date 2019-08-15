const truncate = (str, maxLength) => str = str.length > maxLength ? str.substr(0, maxLength) + '...' : str;
console.log(truncate('Всем привет, вот что мне бы хотелось сказать', 10));