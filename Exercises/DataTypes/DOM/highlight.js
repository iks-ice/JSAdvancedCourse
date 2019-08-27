const highlight = () => {
    const tbody = document.querySelector('tbody');
    const trs = tbody.querySelectorAll('tr');
    trs.forEach(tr => {
        const tds = [...tr.querySelectorAll('td')];
        tds.forEach(td => {
            if (!tds.some(td => td.hasAttribute('data-available'))) {
                tr.lastElementChild.style.visibility = 'hidden';
            }
            if (td.hasAttribute('data-available')) {
                tr.classList.add(td.dataset.available === 'true' ? 'available' : 'unavailable');
            }
            if (td.innerText === 'm' || td.innerText === 'f') {
                tr.classList.add(td.innerText === 'm' ? 'male' : 'female');
            }
            if (Number(td.innerHTML) < 18) {
                console.log(Number(td.innerText));
                tr.style.textDecoration = 'line-through';
            }
        });
    });

}
highlight();