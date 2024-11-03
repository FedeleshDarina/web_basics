//Завдання 1

var string = "I like Uzhnu";
console.log(string);
var number = 2.2;
console.log(number);
var cars = ["daewoo", "bmw", "audi", "jaguar"];
console.log(cars);
var boolean = true;
console.log(boolean);
var math = function () {
  return 5 * 17;
};
console.log(math());
var nothing = null;
console.log(nothing);
var not = undefined;
console.log(not);
var computer = { type: "laptop", model: "Acer", size: "15" };
console.log(computer);

//Завдання 2
var number = 11;
var greeting = "hello";
console.log(number, typeof number);
console.log(greeting, typeof greeting);
greeting = number.toString();
number = parseInt("56");
console.log(number);

//Завдання 3
var number = 4;
var stringN = "4";
console.log(number == stringN);
console.log(number === stringN);

//Завдання 4
let numb = 2;
let shift = 17;
let encryptCaesar = function (numb, shift) {
  return numb + shift;
};
let decryptCaesar = function () {
  return shift;
  -numb;
};

let encrypted = encryptCaesar(numb, shift);
console.log(encrypted);

let decrypted = decryptCaesar(encrypted, shift);
console.log(decrypted);
