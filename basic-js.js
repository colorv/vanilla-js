console.log("warning");
//string
const name = "Lim su Hyeok";
console.log(name);

//Boolean
const bool = true;
console.log(bool);

//number
const num = 100;
console.log(num);

//folat
const float = 1.1;
console.log(float);

//array
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);

//objects
const info = {
  name: "LimSuHyeok",
  age: 31,
  gender: "male",
  favMovie: ["Along the gods", "Oldboy", "Tenet"],
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "cheese burger", fatty: true },
  ],
};
console.log(info.gender);
info.gender = "female";
console.log(info.gender);
console.log(info);

//function
function sayHello(name, age) {
  //console.log("Hello!", name, "you have", age, "years of age");
  console.log(`Hello!! ${name} you have ${age} years of age`);
}
sayHello("Lim Su Hyeok", 30);

//function return
function sayHello2(name, age) {
  return `(Return) Hello! ${name} you have ${age} years of age`;
}
const funReturn = sayHello2("Lim Su Hyeok", 30);
console.log(funReturn);

//function calculator
const calculator = {
  add: function (x, y) {
    return x + y;
  },
  sub: function (x, y) {
    return x - y;
  },
  mul: function (x, y) {
    return x * y;
  },
  div: function (x, y) {
    return x / y;
  },
  squ: function (x, y) {
    return x ** y;
  },
};
const plus = calculator.add(5, 5);
console.log(calculator.add(5, 5));
console.log(calculator.sub(5, 5));
console.log(calculator.mul(5, 5));
console.log(calculator.div(5, 5));
console.log(calculator.squ(2, 2));

//using JS (change html, css)
const title = document.getElementById("title");
title.innerHTML = "Hi From JS";
title.style.color = "red";
document.title = "I own you now";
console.dir(title);
