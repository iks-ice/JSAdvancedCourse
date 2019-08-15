const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const sumSalaries = slalaryObj => {
    if (!slalaryObj['summary']) {
        slalaryObj['summary'] = 0;
    }
    for (const key in slalaryObj) {
        if (key !== 'summary') {
            slalaryObj['summary'] += slalaryObj[key];
        }
    }
    return slalaryObj['summary'];
}

console.log(sumSalaries(salaries));

const sumOwnSalaries = function () {
    if (!this['summary']) {
        this['summary'] = 0;
    }
    for (const key in this) {
        if (key !== 'summary') {
            this['summary'] += this[key];
        }
    }
    return this['summary'];
}
// const boundSumSalaries = sumOwnSalaries.bind(salaries)
console.log(sumOwnSalaries.call(salaries));



