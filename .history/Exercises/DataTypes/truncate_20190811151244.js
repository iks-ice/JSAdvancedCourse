const truncate = (str, maxLength) => str = str.lenght === maxLength ? str.substr(0, maxLength) + '...' : str;
console.log(truncate('Всем привет, вот что мне бы хотелось сказать', 20));