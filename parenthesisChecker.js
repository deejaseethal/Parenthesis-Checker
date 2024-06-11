let expr = "({})}";

let stack = [];
let i, x;

console.log("Expression", expr);
console.log("Type of Expression", typeof expr);
console.log("Expression Length", expr.length);
console.log("First element of Expression Length", expr[0]);

for (i = 0; i < expr.length; i++) {
  //console.log("i value", i);
  x = expr[i];
  console.log("X value", x);

  if (x == "(" || x == "{" || x == "[") {
    stack.push(x);
    console.log("x::", stack);
  }

  if (stack.length == 0) {
    console.log("Unbalanced parenthesis");
  }

  let check;
  switch (x) {
    case ")":
      check = stack.pop();
      console.log("Check Value", check);
      console.log("Stack", stack);
      if (check == "}" || check == "]") {
        console.log("Unbalanced )");
      }
      break;
    case "}":
      check = stack.pop();
      console.log("Check Value", check);
      console.log("Stack", stack);
      if (check == ")" || check == "]") {
        console.log("Unbalanced }");
      }
      break;
    case "]":
      check = stack.pop();
      console.log("Check Value", check);
      console.log("Stack", stack);
      if (check == ")" || check == "}") {
        console.log("Unbalanced ]");
      }
      break;
  }
}

if (stack.length == 0) {
  console.log("Balanced Parenthesis");
} else {
  console.log("Unbalanced Parenthesis");
}
