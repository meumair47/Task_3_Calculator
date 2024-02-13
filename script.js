const display = document.getElementById("display");
let operation = "";
let firstOperand = "";
let secondOperand = "";
let currentOperation = null;

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;
    if (value >= "0" && value <= "9") {
      if (currentOperation) {
        secondOperand += value;
        display.innerText += value;
      } else {
        firstOperand += value;
        display.innerText += value;
      }
    } else if (value === "C") {
      clear();
    } else if (value === "=") {
      calculate();
    } else {
      currentOperation = value;
      display.innerText += ` ${value} `;
    }
  });
});

function calculate() {
  let result;
  switch (currentOperation) {
    case "+":
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case "-":
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case "*":
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case "/":
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
  }
  display.innerText = result;
  firstOperand = result;
  secondOperand = "";
  currentOperation = null;
}

function clear() {
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
  display.innerText = "";
}
