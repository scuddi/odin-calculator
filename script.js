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

// Selectors for all buttons and others

const input_field = document.querySelector("#input")

const button_clear = document.querySelector("#clear");
const button_plus = document.querySelector("#plus");
const button_minus = document.querySelector("#minus");
const button_multiply = document.querySelector("#multiply");
const button_equal = document.querySelector("#equal");

const button_1 = document.querySelector("#b1")
const button_2 = document.querySelector("#b2")
const button_3 = document.querySelector("#b3")
const button_4 = document.querySelector("#b4")
const button_5 = document.querySelector("#b5")
const button_6 = document.querySelector("#b6")
const button_7 = document.querySelector("#b7")
const button_8 = document.querySelector("#b8")
const button_9 = document.querySelector("#b9")

// Eventlisteners for all buttons

button_1.addEventListener("click", () => {
    var_1 = 1;
    input_field.textContent = var_1;
});