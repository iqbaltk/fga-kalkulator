//Screen
const calculatorScreen = document.querySelector(".calculator-screen");
const operatorScreen = document.querySelector(".operator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

//Key
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

//Operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    console.log(event.target.value);
    inputOperator(event.target.value);
    operatorScreen.value = (`${prevNumber} ${operator.value}`);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

//kalkulasi
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  operatorScreen.value = '';
  currentNumber = result;
  calulationOperator = "";
};

//clear screen AC
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  operatorScreen.value = "";
  currentNumber = "0";
};

//Decimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

//percentage
const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", (event) => {
  inputPersentage(currentNumber);
  updateScreen(currentNumber);
});

const inputPersentage = (nominal) => {
  return (currentNumber = nominal / 100);
};

//del screen
const delScreen = document.querySelector(".del-screen");

delScreen.addEventListener("click", (event) => {
  deleteScreen();
  updateScreen(currentNumber);
});

const deleteScreen = () => {
  currentNumber = "0";
};
