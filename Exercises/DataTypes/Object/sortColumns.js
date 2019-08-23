const users = [
    {
        name: 'Аня',
        age: 20
    },
    {
        name: 'Дима',
        age: 30
    },
    {
        name: 'Сергей',
        age: 18
    },
    {
        name: 'Олег',
        age: 31
    },
    {
        name: 'Оля',
        age: 34
    },
    {
        name: 'Кеша',
        age: 50
    },
    {
        name: 'Борис',
        age: 15
    }
]
const table = document.createElement('table');
table.append(createHead(users[0]));
document.body.append(table);

function createHead (user) {
    const thead = document.createElement('thead');
    const headColumns = Object.keys(user);
    const tr = document.createElement('tr');
    tr.innerHTML = headColumns.reduce((header, title) =>
        header += `<th data-type = ${typeof title}>${title}</th>`, '');
    thead.append(tr);
    return thead;
}