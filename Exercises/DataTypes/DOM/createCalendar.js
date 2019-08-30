const createCalendar = (elem, year, month) => {
    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const createElement = tag => document.createElement(tag);

    const firstDay = new Date(year, month, 1).getDay();
    const lastMonthDay = new Date(year, month + 1, 0).getDate();

    const createTHead = weekDayNames => {
        const thead = createElement('thead');
        const tr = createElement('tr');
        weekDayNames.forEach(name => {
            const td = createElement('td');
            td.innerHTML = name;
            tr.append(td);
        });
        thead.append(tr);
        return thead;
    }

    const createTBody = () => {
        const tbody = createElement('tbody');

        for (let day = 1; day <= lastMonthDay;) {
            const tr = createElement('tr');
            for (let index = 1; index <= 7; index++) {
                const td = createElement('td');
                if (day > lastMonthDay) {
                    break;
                }
                if (index === firstDay) {
                    td.innerHTML = day++;
                    tr.append(td);
                    continue;
                }
                td.innerHTML = day++;
                tr.append(td);
            }
            tbody.append(tr);
        }
        return tbody;
    }

    const table = document.createElement('table');
    table.append(createTHead(weekDays), createTBody());
    elem.append(table);
}
const container = document.querySelector('.container');
createCalendar(container, 2019, 6);


// .container {
//     width: 100vh;
//     background: grey;
// }
// table, td {
//     border: 1px solid #cecece;
//     padding: 10px;
// }

// thead {
//     font-weight: 700;
// }