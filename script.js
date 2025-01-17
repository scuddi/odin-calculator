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
    last_input.innerHTML = input_field.innerHTML;
    input_field.innerHTML = "";
    operator_field.innerHTML = operator_clicked;
};

// Function to clear calculator display

function clearDisplay() {
    last_input.innerHTML = "";
    input_field.innerHTML = "0";
    operator_field.innerHTML = "";
};

// Operate function

function equal() {
    var_1 = Number(last_input.innerHTML);
    var_2 = Number(input_field.innerHTML);
    operator = operator_field.innerHTML;

    var result = operate(operator, var_1, var_2);
    last_input.innerHTML = input_field.innerHTML;
    input_field.innerHTML = result;
    operator_field.innerHTML = "";

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

// Probably not needed because of Eventlisteners for all digits below
// const button_1 = document.querySelector("#b1")
// const button_2 = document.querySelector("#b2")
// const button_3 = document.querySelector("#b3")
// const button_4 = document.querySelector("#b4")
// const button_5 = document.querySelector("#b5")
// const button_6 = document.querySelector("#b6")
// const button_7 = document.querySelector("#b7")
// const button_8 = document.querySelector("#b8")
// const button_9 = document.querySelector("#b9")

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