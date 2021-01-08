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
