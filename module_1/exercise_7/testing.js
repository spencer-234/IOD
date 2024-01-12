// This function returns the sum of two numbers
function sum(a, b) {
    return a + b;
};

// Tests for sum function
if (sum(2, 3) !== 5) {
    console.error("Failed");
}

if (sum(5, 6) === 11) {
    console.log("Passed");
}

if (sum(2, -3) === -1) {
    console.log("Passed");
}

// This function returns the subtraction of two numbers
function subtract(a, b) {
    return a - b;
};

// Tests for subtract function
if (subtract(2, 3) !== -1) {
    console.error("Failed");
}

if (subtract(7, 4) === 3) {
    console.log("Passed");
}

if (subtract(2, -3) === 5) {
    console.log("Passed");
}

// This function returns the multiplication of two numbers
function multiply(a, b) {
    return a * b;
};

// Tests for multiply function
if (multiply(6, 3) !== 5) {
    console.error("Failed");
}

if (multiply(5, 6) === 30) {
    console.log("Passed");
}

if (multiply(2, -3) === -6) {
    console.log("Passed");
}

// This function returns the division of two numbers
function divide(a, b) {
    return a / b;
}

// Tests for multiply function
if (divide(6, 3) === 2) {
    console.error("Passed");
}

if (divide(36, 6) !== 36) {
    console.log("Failed");
}

if (divide(2, 1 === 2)) {
    console.log("Passed");
}

