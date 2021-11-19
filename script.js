const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};


// Related to the numbers in calculator
const numbers = document.querySelectorAll(".number");
let currentInput='0'

const inputNumber = (number) => {
  if (currentInput === "0") {
    currentInput = number;
  } 
  else {
    currentInput = currentInput + number;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    // console.log(event.target.value);
    inputNumber(event.target.value);
    updateScreen(currentInput);
  });
});


//  Related to the decimal
const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", () => {
  if (calculatorScreen.value.indexOf(".") === -1) {
    inputNumber(".");
    updateScreen(currentInput);
  }
});


// Related to the Operator in the Calculator
const operators = document.querySelectorAll(".operator");
const inputOperator = (operator) => {
  prevInput = currentInput;
  calculationOperator = operator;
  updateScreen(operator);
  currentInput = "0";
};
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});


// Related to the EqualSign in the calculator
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentInput);
});

const calculate = () => {
  let result = 0;
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevInput) + parseFloat(currentInput);
      break;
    case "-":
      result = parseFloat(prevInput) - parseFloat(currentInput);
      break;
    case "*":
      result = parseFloat(prevInput) * parseFloat(currentInput);
      break;
    case "/":
      result = parseFloat(prevInput) / parseFloat(currentInput);
      break;
    case "%":
      result = (parseFloat(prevInput) / 100);
      break;
    default:
      return;
  }
  currentInput = result.toString();
  calculationOperator = "";
};


// Related to AllClear in Calculator
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
  console.log("Clear");
});

const clearAll = () => {
  prevInput = "0";
  calculationOperator = "";
  currentInput = "0";
};

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentInput);
});
