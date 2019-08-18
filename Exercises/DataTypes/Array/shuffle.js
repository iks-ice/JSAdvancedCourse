// const shuffle = arr => arr.sort((a, b) => Math.random() > 0.5 ? 1 : -1);

let arr = [1, 2, 3,];

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '312': 0,
    '321': 0,
}

const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

// показать количество всех возможных вариантов
console.log(count);