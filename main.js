function calculate() {
  let x = document.getElementById("numberF").value;
  let op = document.getElementById("op").value;
  let y = document.getElementById("numberS").value;
  
  x = parseInt(x);
  y = parseInt(y);
  let e = document.getElementById("ans");
  let box = document.getElementById("box");

  let res = 0;
  switch (op) {
    case "+":
      res = x + y;
      e.textContent = res;

      break;
    case "-":
      res = x - y;
      e.textContent = res;

      break;
    case "*":
      res = x * y;
      e.textContent = res;

      break;
    case "/":
      res = x / y;
      e.textContent = res;

      break;
  }

  if ((res) => 0) {
    box.textContent = "დადებიათია";
    box.style.backgroundColor = "Green";
  } else {
    box.textContent = "უარყოფიოთია";
    box.style.backgroundColor = "Red";
  }
}
