// set up variables for numbers and operator
let num1 = "";
let num2 = "";
let selectedOp;
let fetchOp;
let displayNum = document.querySelector('.displaynum');
let displayExpression = document.querySelector('.expression');
let equals = document.querySelector('#equals')
let clear = document.querySelector('#clear');
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
            num1 = fetchFunc();
            num2 = "";
        }
        selectedOp = operator.textContent;
        fetchOp = operator.value;
        displayExpression.textContent = `${num1} ${selectedOp}`;
        displayNum.textContent = "";
    })
});

// set operate function to equals button and display results
equals.addEventListener('click', () => {
    if (num1 && num2 && selectedOp) {
        displayExpression.textContent = `${num1} ${selectedOp} ${num2} =`;
        fetchFunc();
    } else {
        setError();
    }
});

// set up clear button functionality
clear.addEventListener('click', () => {
    num1 = "";
    num2 = "";
    selectedOp = "";
    fetchOp = "";
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

const setError = () => {
    displayNum.textContent = "Err";
    displayExpression.textContent = "";
}

const fetchFunc = () => {
    let message = document.querySelector('#message').value;

    fetch(`/calculator/${fetchOp}?num1=${num1}&num2=${num2}&msg=${message}`)
      .then((response) => response.json())
      .then((data) => {
        displayNum.textContent = data.result;
      });
  }
