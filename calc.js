let display = document.querySelector("#display");

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let btn0 = document.querySelector("#btn0");

let btnPlus = document.querySelector("#btnplus");
btnPlus.addEventListener("click", () => {
  num1 = display.value;
  display.value = "";
  op = "+";
});
let btnMinus = document.querySelector("#btnminus");
btnMinus.addEventListener("click", () => {
  num1 = display.value;
  display.value = "";
  op = "-";
});
let btnStar = document.querySelector("#btnstar");
btnStar.addEventListener("click", () => {
  num1 = display.value;
  display.value = "";
  op = "*";
});
let btnDivide = document.querySelector("#btndevide");
btnDivide.addEventListener("click", () => {
  num1 = display.value;
  display.value = "";
  op = "/";
});
let btnPoint = document.querySelector("#btnpoint");
btnPoint.addEventListener("click", () => {
  this.display.value += ".";
});

let btnClear = document.querySelector("#btnClear");
btnClear.addEventListener("click", () => {
  display.value = "";
});

let btnCalc = document.querySelector("#btnC");

let num1 = 0;
let num2 = 0;
let op = "";

btn1.addEventListener("click", () => {
  display.value += 1;
});
btn2.addEventListener("click", () => {
  display.value += 2;
});
btn3.addEventListener("click", () => {
  display.value += 3;
});
btn4.addEventListener("click", () => {
  display.value += 4;
});
btn5.addEventListener("click", () => {
  display.value += 5;
});
btn6.addEventListener("click", () => {
  display.value += 6;
});
btn7.addEventListener("click", () => {
  display.value += 7;
});
btn8.addEventListener("click", () => {
  display.value += 8;
});
btn9.addEventListener("click", () => {
  display.value += 9;
});
btn0.addEventListener("click", () => {
  display.value += 0;
});

btnCalc.addEventListener("click", () => {
  //console.log(`${num1} + ${num2}  ${calc.sum(num1,num2)}`);
  num2 = display.value;
  switch (op) {
    case "+":
      display.value = (parseFloat(num1) + parseFloat(num2)).toFixed(2);
      break;
    case "-":
      display.value = (parseFloat(num1) - parseFloat(num2)).toFixed(2);
      break;
    case "*":
      display.value = (parseFloat(num1) * parseFloat(num2)).toFixed(2);
      break;
    case "/":
      display.value = (parseFloat(num1) / parseFloat(num2)).toFixed(2);
      break;
    default:
      display.value = "EEEEEEEEEE";
  }
});