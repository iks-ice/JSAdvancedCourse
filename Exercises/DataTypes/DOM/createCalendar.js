const createCalendar = (elem, year, month) => {
    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const createElement = tag => document.createElement(tag);

    const firstDay = new Date(year, month, 1).getDay();
    const lastMonthDay = new Date(year, month + 1, 0).getDate();
    console.log(firstDay);
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
        // for (let day = -firstDay + 1; day <= lastMonthDay;) {
        //     const tr = createElement('tr');
        //     tbody.append(tr);
        // }
        return tbody;
    }

    const table = document.createElement('table');
    table.append(createTHead(weekDays), createTBody());
    elem.append(table);
}
const container = document.querySelector('.container');
createCalendar(container, 2019, 8);


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


