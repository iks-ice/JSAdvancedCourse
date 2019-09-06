const createElement = tag => document.createElement(tag);

const createCalendar = (elem, year, month) => {

    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const firstDay = new Date(year, month, 1).getDay();
    const lastMonthDay = new Date(year, month + 1, 0).getDate();

    const createTHead = weekDays => {
        const thead = createElement('thead');
        const week = createElement('tr');
        weekDays.forEach(weekDay => {
            const day = createElement('td');
            day.innerHTML = weekDay;
            week.append(day);
        });
        thead.append(week);
        return thead;
    }

    const createTBody = () => {
        const tbody = createElement('tbody');

        let day = firstDay === 0 ? -5 : 2 - firstDay;
        for (; day <= lastMonthDay;) {
            const week = createElement('tr');
            for (let index = 0; index < 7; index++) {
                const weekDay = createElement('td');
                if (day > 0 && day <= lastMonthDay) {
                    weekDay.innerHTML = day++;
                    week.append(weekDay);
                    continue;
                }
                day++;
                week.append(weekDay);
            }
            tbody.append(week);
        }
        return tbody;
    }

    const table = createElement('table');
    table.append(createTHead(weekDays), createTBody());
    elem.append(table);
}

const container = document.querySelector('.container');
createCalendar(container, 2019, 10);

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