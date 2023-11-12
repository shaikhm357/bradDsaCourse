function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      console.log("only support +,-,* and /");
  }
  return ans;
}

let arr = ["+", "-", "*", "/"];
for (let i = 0; i < arr.length; i++) {
  console.log(calculator(6, 2, arr[i]), "\n");
}
/* out put
8 

4 

12 

3 
*/
