let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};
// const str = `<ul><li><ul>Рыбы<li>форель</li><li>лосось</li></ul></li><li><ul>Деревья<li><ul>Огромные<li>секвойя</li><li>дуб</li></ul></li><li><ul>Цветковые<li>яблоня</li><li>магнолия</li></ul></li></ul></li></ul>`;

// const div = document.createElement('div');
// div.innerHTML = str;
// document.body.append(div);

createTree(document.body, data);

function createUl () {
    return document.createElement('ul');
}
function fillList (ul, obj) {
    const lis = Object.keys((obj));
    lis.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item;
        ul.append(li);
    })

}
function createTree (container, data) {
    const upperUl = document.createElement('ul');


    fillList(upperUl, data);

    container.append(upperUl);
}