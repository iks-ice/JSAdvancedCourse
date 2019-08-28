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

{/* <table class="js-teachers">
<thead>
    <tr>
        <td>Name</td>
        <td>Age</td>
        <td>Gender</td>
        <td>Status</td>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Ilia</td>
        <td>30</td>
        <td>m</td>
        <td data-available="true">Free</td>
    </tr>
    <tr>
        <td>Tim</td>
        <td>39</td>
        <td>m</td>
        <td data-available="false">On duty</td>
    </tr>
    <tr>
        <td>Marina</td>
        <td>25</td>
        <td>f</td>
        <td data-available="true">Ready to teach</td>
    </tr>
    <tr>
        <td>Klivden</td>
        <td>42</td>
        <td>m</td>
        <td>Leeeroy Jenkins!</td>
    </tr>
    <tr>
        <td>Ivan</td>
        <td>17</td>
        <td>m</td>
        <td data-available="true">Ready to teach</td>
    </tr>
</tbody>
</table> */}

// table, td {
//     border: 1px solid #cecece;
//     padding: 10px;
// }

// thead {
//     font-weight: 700;
// }

// .male td {
//     background-color: #65bff3;
// }

// .female td {
//     background-color: #932bb3;
// }

// .available td {
//     border: 2px solid green;
// }

// .unavailable td {
//     border: 2px solid red;
// }