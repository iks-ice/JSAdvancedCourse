const createCalendar = (elem, year, month) => {
    const mapWeekDays = new Map([[1, 'Пн'], [2, 'Вт'], [3, 'Ср'], [4, 'Чт'], [5, 'Пт'], [6, 'Сб'], [7, 'Вс']]);
    const createElement = tag => document.createElement(tag);

    const firstDay = new Date(year, month, 1).getDay();
    const firstDayInRus = mapWeekDays.get(firstDay);
    const lastMonthDay = new Date(year, month + 1, 0).getDate();

    const createTHead = nameWeekDays => {
        const thead = createElement('thead');
        const days = nameWeekDays.values();
        const tr = createElement('tr');
        for (const day of days) {
            const td = createElement('td');
            td.innerHTML = day;
            tr.append(td);
        }
        thead.append(tr);
        return thead;
    }

    const createTBody = () => {
        const tbody = createElement('tbody');
        let isFirstDayFilled = false;

        for (let day = 1; day <= lastMonthDay;) {
            const tr = createElement('tr');
            for (let index = 1; index <= 7; index++) {
                const td = createElement('td');
                if (day > lastMonthDay) {
                    break;
                }
                if (mapWeekDays.get(index) === firstDayInRus) {
                    td.innerHTML = day++;
                    isFirstDayFilled = true;
                } else if (isFirstDayFilled) {
                    td.innerHTML = day++;
                }
                tr.append(td);
            }
            tbody.append(tr);
        }
        return tbody;
    }

    const table = document.createElement('table');
    table.append(createTHead(mapWeekDays), createTBody());
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