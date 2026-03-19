function calculate() {
  let x = document.getElementById("numberF").value;
  let op = document.getElementById("op").value
  let y = document.getElementById("numberS").value;
  x = parseInt(x);
  y = parseInt(y);
  let e = document.getElementById("ans");

  switch (op) {
    case "+":
      e.textContent = x + y;
      break;
    case "-":
      e.textContent = x - y;
      break;
    case "*":
      e.textContent = x * y;
      break;
    case "/":
      e.textContent = x / y;
      break;
  }
}