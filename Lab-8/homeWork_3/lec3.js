//Завдання 1
//Унарні опереатори
let a = 8;

let string = "342";
console.log(+string); //перетворює значення на число

console.log(-a); //змінює знак числа

a++;
console.log(a); //інкремент
a--;
console.log(a); //декремент

let TorF = !true;
console.log(TorF); //Міняє значеення навпаки

console.log(typeof a); //визнвчає тип данних

let object = { name: "Anhelina", age: "17" };
delete object.name;
console.log(object); //Видаляє визначений з об'єктів

//Бінарні опереатори(працють двома операндами)

let b = 50;
let c = 2;
console.log(b + c);
console.log(b - c);
console.log(b * c);
console.log(b / c);
console.log(b % c);
console.log(b ** c);

console.log(b > c);
console.log(b < c);
console.log(b >= c);
console.log(b <= c);
console.log(b == c);
console.log(b === c);
console.log(b != c);
console.log(b !== c);

console.log(true && false); // Логічне І: false
console.log(true || false); // Логічне АБО: true
console.log(false ?? "default"); // Оператор нульового злиття: "default"

//Треанарні оператори
let age = 6;
let type = age >= 6 ? "Шкільного віку" : "Дитячого віку";
console.log(type);

//Завдання 2
let line1 = "Нехай завжди буде сонце,";
let line2 = "Нехай завжди буде небо,";
let line3 = "Нехай завжди буде мама,";
let line4 = "Нехай завжди буду я.";

let song = line1.concat("\n", line2, "\n", line3, "\n", line4);
console.log(song);
