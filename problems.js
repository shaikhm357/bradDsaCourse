const Stack = require("./index");

function balanceParenthesis(parenthesis) {
  const stack = new Stack();
  for (let i = 0; i < parenthesis.length; i++) {
    if (parenthesis[i] === "{") {
      stack.push(parenthesis[i]);
    } else if (parenthesis[i] === "}") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}

console.log(balanceParenthesis("{{{}}}"));
console.log(balanceParenthesis("{}{}"));
console.log(balanceParenthesis("{{{}}"));
console.log(balanceParenthesis("{{}}{"));
