function sum(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
}

let first = 10;
let second = 5;

console.log(`Sum result = ${sum(first, second)}`);
console.log(`Subtraction result = ${subtract(first, second)}`);
console.log(`Multiplication result = ${multiply(first, second)}`);
console.log(`Division result = ${divide(first, second)}`);

function helloPerson(firstName, lastName) {
    return `Hello ${firstName} ${lastName}`;
}

console.log(helloPerson("Spencer", "Evans"));