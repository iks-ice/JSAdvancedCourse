let calculator = {
    a: 0,
    b: 0,
    read () {
        this.a = +prompt('Input number');
        this.b = +prompt('Input number');
    },
    sum () {
        return this.a + this.b;
    },
    mul () {
        return this.a * this.b;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());