let display = "";
let inputs = "";
let op = "";
let output = "";
let memory = 0;

function getDisplayValue(input) {
  display += input.value;
  updateDisplay(display);
}

function updateDisplay(val) {
  const display_html = document.getElementById("display");
  display_html.value = val;
}

function clearDisplay() {
  const display_html = document.getElementById("display");
  display_html.value = "";
  display = "";
}

function setInputs() {
  // if (input1 === "") {
  //   input1 = document.getElementById("display").value;
  //   // clearDisplay();
  //   console.log(input1);
  // } else if (input2 === "") {
  //   input2 = document.getElementById("display").value;
  //   console.log(input2);
  // }
  var input = document.getElementById("display").value;
  inputs = input.split(op);
  // console.log(inputs);
}

function setOperator(operator) {
  op = operator.value;
}

function result() {
  clearDisplay();
  const input1_num = parseFloat(inputs[0]);
  const input2_num = parseFloat(inputs[1]);

  switch (op) {
    case "+":
      output = input1_num + input2_num;
      clearDisplay();
      return updateDisplay(output);
    case "-":
      output = input1_num - input2_num;
      clearDisplay();
      return updateDisplay(output);
    case "*":
      output = input1_num * input2_num;
      clearDisplay();
      return updateDisplay(output);
    case "/":
      output = input1_num / input2_num;
      clearDisplay();
      return updateDisplay(output);
    case "mod":
      output = input1_num % input2_num;
      clearDisplay();
      return updateDisplay(output);
    case "sqrt":
      output = Math.sqrt(input1_num);
      clearDisplay();
      return updateDisplay(output);
    case "uminus":
      output = input1_num * -1;
      inputs[0] = output;
      return updateDisplay(output);
    case "fact":
      output = 1;
      if (input1_num == 0 || input1_num == 1) {
        break;
      } else if (input1_num > 1) {
        for (let i = input1_num; i >= 1; i--) {
          output = output * i;
        }
        clearDisplay();
        return updateDisplay(output);
      } else {
        updateDisplay("number has to be positive.");
        clearDisplay();
        return;
      }
    case "pie":
      output = Math.PI;
      clearDisplay();
      return updateDisplay(output);
    case "pow10":
      output = Math.pow(10, input1_num);
      clearDisplay();
      return updateDisplay(output);
    case "exp":
      output = Math.exp(input1_num);
      clearDisplay();
      return updateDisplay(output);

    case "log":
      if (input1_num > 0) {
        output = Math.log(input1_num);
        clearDisplay();
        return updateDisplay(output);
      } else {
        clearDisplay();
        return updateDisplay("Invalid input");
      }

    case "tan":
      output = Math.tan(input1_num);
      clearDisplay();
      return updateDisplay(output);

    case "cos":
      output = Math.cos(input1_num);
      clearDisplay();
      return updateDisplay(output);

    case "sin":
      output = Math.sin(input1_num);
      clearDisplay();
      return updateDisplay(output);

    case "cube":
      output = Math.pow(input1_num, 3);
      clearDisplay();
      return updateDisplay(output);

    case "sqre":
      output = Math.pow(input1_num, 2);
      clearDisplay();
      return updateDisplay(output);

    case "byx":
      if (input1_num != 0) {
        output = 1 / input1_num;
        clearDisplay();
        return updateDisplay(output);
      } else {
        clearDisplay();
        return updateDisplay("Cannot divide by zero");
      }

    default:
      clearDisplay();
      return updateDisplay("Invalid operator");
  }
}

function clearAll() {
  clearDisplay();
  inputs = "";
  input1_num = "";
  input2_num = "";
  output = "";
}

function del() {
  var currentDisplay = document.getElementById("display").value;
  output = currentDisplay.substring(0, currentDisplay.length - 1);
  display = output;
  return updateDisplay(output);
}

function mClear() {
  memory = 0;
}

function mRecall() {
  output = memory;
  input1_num = output;
  return updateDisplay(output);
}

function mPlus() {
  input1_num = parseFloat(document.getElementById("display").value);
  memory += input1_num;
  return updateDisplay(memory);
}

function mMinus() {
  input1_num = parseFloat(document.getElementById("display").value);
  memory -= input1_num;
  return updateDisplay(memory);
}

function mStore() {
  input1_num = parseFloat(document.getElementById("display").value);
  memory = input1_num;
}
