const calculator = {
    result: 0,
    add(value) {
        console.log(this.result);
        this.result += value;
        return this;
    },
    substract(value) {
        console.log(this.result);
        this.result -= value;
        return this;
    },
    multiply(value) {
        console.log(this.result);
        this.result *= value;
        return this;
    }
}
calculator.add(5).substract(3).multiply(10);
console.log(calculator.result);