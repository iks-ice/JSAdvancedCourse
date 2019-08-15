const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const sumSalaries = slalaryObj => {
    if (!slalaryObj['summary']) {
        slalaryObj['summary'] = 0;
    }
    // for (const key in slalaryObj) {
    //     if (slalaryObj[key] === 'summary') {
    //         console.log(key);
    //         slalaryObj['summary'] += slalaryObj[key];
    //     }
    // }
    return slalaryObj['summary'];
}

console.log(sumSalaries(salaries));


