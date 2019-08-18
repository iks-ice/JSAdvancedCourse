function Calculator () {
    const methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };
    this.calculate = function (str) {
        const [arg1, operator, arg2] = str.split(' ');
        return methods[operator](Number(arg1), Number(arg2));
    }
    this.addMethod = function (str, func) {
        methods[str] = func;
    }
}
const calc = new Calculator();

calc.addMethod('**', (a, b) => a ** b);
calc.addMethod('*', (a, b) => a * b);


console.log(calc.calculate('1 + 2'));
console.log(calc.calculate('2 * 3'));