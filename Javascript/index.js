function calculate(operator, input1, input2, resultField) {
  const num1 = parseFloat(document.getElementById(input1).value);
  const num2 = parseFloat(document.getElementById(input2).value);

  if (!isNaN(num1) && !isNaN(num2)) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Division by zero!';
            }
            break;
        case '*':
            result = num1 * num2;
            break;
            default:
                result = 'Invalid operator';
    }
    document.getElementById(resultField).value = result;
  } else {
    document.getElementById(resultField).value = 'Invalid input';
  }
  return result;
}

function clearResult() {
  document.getElementById("input1").value = '';
  document.getElementById("input2").value = '';
  document.getElementById("result").value = '';
}