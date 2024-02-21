// set up variables for numbers and operator
let num1 = "";
let num2 = "";
let selectedOp;
let displayNum = document.querySelector('.displaynum');
let displayExpression = document.querySelector('.expression');
let equals = document.querySelector('#equals')
let clear = document.querySelector('#clear');
let zeros = document.querySelector('#double_zero');
let decimal = document.querySelector('#decimal');
let toggleSign = document.querySelector('#signs');

// get num1 and num2
let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (!selectedOp) {
            num1 += number.textContent;
            displayNum.textContent = `${num1}`;
        } else if (num1 && selectedOp) {
            num2 += number.textContent;
            displayNum.textContent = `${num2}`;
        }
    })
});

// get operator
let operators = document.querySelectorAll('.func');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (num1 && selectedOp && num2) {
            num1 = operate(num1, selectedOp, num2);
            num2 = "";
        }
        selectedOp = operator.textContent;
        displayExpression.textContent = `${num1} ${selectedOp}`;
        displayNum.textContent = "";
    })
});

// set operate function to equals button and display results
equals.addEventListener('click', () => {
    if (num1 && num2 && selectedOp) {
        displayExpression.textContent = `${num1} ${selectedOp} ${num2} =`;
        let result = operate(num1, selectedOp, num2);
        displayNum.textContent = Math.round(result * 100) / 100;
        num1 = result;
        num2 = "";
    }
});

// set up clear button functionality
clear.addEventListener('click', () => {
    num1 = "";
    num2 = "";
    selectedOp = "";
    displayExpression.textContent = "";
    displayNum.textContent = "";
});

// set up button to toggle between positive and negative numbers
toggleSign.addEventListener('click', () => {
    if (!selectedOp && num1 > 0) {
        num1 = `-${num1}`;
        displayNum.textContent = num1;
    } else if (selectedOp && num2 > 0) {
        num2 = `-${num2}`;
        displayNum.textContent = num2;
    } else if (!selectedOp && num1 < 0) {
        num1 = Math.abs(num1)
        displayNum.textContent = num1;
    } else if (selectedOp && num2 < 0) {
        num2 = Math.abs(num2);
        displayNum.textContent = num2;
    }
});

// set up double zeros button
zeros.addEventListener('click', () => {
    if (!selectedOp) {
        num1 += '00';
        displayNum.textContent = `${num1}`;
    } else if (selectedOp) {
        num2 += '00';
        displayNum.textContent = `${num2}`;
    }
});

// set up functionality for decimal button
decimal.addEventListener('click', () => {
    if (!selectedOp && !(num1.includes("."))) {
        num1 += ".";
        displayNum.textContent = `${num1}`;
    } else if (selectedOp && !(num2.includes("."))) {
        num2 += ".";
        displayNum.textContent = `${num2}`;
    }
});

// set up functions for expressions
function operate(num1, selectedOp, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (selectedOp) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 + num2;
            break;
        case 'x':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        case '%':
            return num1 % num2;
            break;
    }
};

