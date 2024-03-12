class Calculator {
    constructor() {
        this.id = Math.random() * (99999 - 1) + 1;
    }

    add(num1, num2) {
        let result = num1 + num2;
        return result;
    }

    subtract(num1, num2) {
        let result = num1 - num2;
        return result;
    }

    multiply(num1, num2) {
        let result = num1 * num2;
        return result;
    }

    divide(num1, num2) {
        let result = num1 / num2;
        return result;
    }

    modulus(num1, num2) {
        let result = num1 % num2;
        return result;
    }
}

export default Calculator;