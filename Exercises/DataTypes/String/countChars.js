const countConsiquentChars = str => {
    let counter = 1;
    let result = '';
    for (let index = 0; index < str.length; index++) {
        if (str[index] === str[index + 1]) {
            counter++;
            continue;
        }
        result += `${counter}${str[index]}`;
        counter = 1;
    }
    return result;
}

const countChars = str => {
    const charArr = str.split('');
    let counter = 1;
    let result = '';
    for (let i = 0; i < charArr.length; i++) {
        for (let j = i + 1; j < charArr.length; j++) {
            if (charArr[i] === charArr[j]) {
                counter++;
                charArr.splice(j, 1);
                j--;
            }
        }
        result += `${counter}${charArr[i]}`;
        counter = 1;
    }
    return result;
}


console.log(countChars('qweq 55yt6weqwe'));