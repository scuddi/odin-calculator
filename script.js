// Functionality for the calculator

// Variables for math operations

let var_1;
let var_2;
let operator;

// Basic mathematical functions

function add(a, b) {
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
};

// Operate function

function operate (operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else  if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    };
};

// Eventlisteners for Buttons

