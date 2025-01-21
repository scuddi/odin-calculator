// Functionality for the calculator

// Error messages

let divideByZero = "You can't do that fam..."

// Variables for math operations

let var_1;
let var_2;
let operator;

// Storing variables

let currentResult = null;
let isOperatorChained = false;

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
    if (b === 0) {
        alert("I see why you need a calculator. Maybe watch this first: \n\nhttps://youtu.be/NKmGVE85GUU?si=zI2cN7VcN8DsxhXz");
    } else {
        return a / b;
    };
};

// Function to update calculator display

function updateDisplay (single_value) {
    if (input_field.innerHTML === "0") {
        return input_field.innerHTML = single_value;
    } else {
        return input_field.innerHTML += single_value;
    };
};

// Function when operator is clicked

function operatorClicked (operator_clicked) {
    if (isOperatorChained && last_input.innerHTML !== "") {
        var_1 = currentResult ?? Number(last_input.innerHTML);
        var_2 = Number(input_field.innerHTML);
        currentResult = operate(operator, var_1, var_2);
        last_input.innerHTML = currentResult;
        input_field.innerHTML = "";
    } else {
        last_input.innerHTML = input_field.innerHTML;
        input_field.innerHTML = "";
    }
    operator_field.innerHTML = operator_clicked;
    operator = operator_clicked;
    isOperatorChained = true;
};

// Function to clear calculator display

function clearDisplay() {
    last_input.innerHTML = "";
    input_field.innerHTML = "0";
    operator_field.innerHTML = "";
    currentResult = null;
    isOperatorChained = false;
};

// Operate function

function equal() {
    if (last_input.innerHTML === "" && operator_field.innerHTML === "") {
        operator_field.innerHTML = "=";
    } else {
        var_1 = currentResult ?? Number(last_input.innerHTML);
        var_2 = Number(input_field.innerHTML);
        operator = operator_field.innerHTML;

        var result = operate(operator, var_1, var_2);
        result = Number(result.toFixed(4)); // Number(...) is used so that only if more than 4 decimals exists it is rounded
        currentResult = result;
        last_input.innerHTML = input_field.innerHTML;
        input_field.innerHTML = result;
        operator_field.innerHTML = "=";
        isOperatorChained = false;
    };
};

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

const input_field = document.querySelector("#new-input")
const last_input = document.querySelector("#last-input")
const operator_field = document.querySelector("#operator-store")

const button_clear = document.querySelector("#clear");
const button_plus = document.querySelector("#plus");
const button_minus = document.querySelector("#minus");
const button_multiply = document.querySelector("#multiply");

const digit_click = document.querySelectorAll(".digit");

const operator_click = document.querySelectorAll(".operator");

const clear_click = document.querySelector("#clear");

const equal_click = document.querySelector("#equal");

// Eventlisteners for all buttons with class digit

digit_click.forEach((digit) => {
    digit.addEventListener("click", () => updateDisplay(digit.innerHTML))
});

operator_click.forEach((operator) => {
    operator.addEventListener("click",() => operatorClicked(operator.innerHTML))
});

clear_click.addEventListener("click", clearDisplay);

equal_click.addEventListener("click", equal);

// Storing Variables

let input_value;