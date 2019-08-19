function Accumulator (startValue) {
    this.value = startValue;
    this.read = function () {
        this.value += +prompt('input value to add it to the current', 0);
    }
}

const accum = new Accumulator(5);
accum.read();
accum.read();
accum.read();
accum.read();
console.log(accum.value);