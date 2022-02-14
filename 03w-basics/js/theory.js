/*----------------------------> Литералы объектов <----------------------------*/

// Объект колдонуунун  эки жолу бар
// ------------------------------------

// Биринчиси конструктор. Бирок муну практикада эчким дээрлик колдонбойт.
// let user = new Object();

// Биринчиси ордуна кыскача тармал кашаны({}) колдонобуз.
// let user = {
//   name: "Moldogazy",
//   age: 21,
//   hasHar: false,
//   "user hobbies": ["hiking", "wrestling", "coding"],
//   friends: [
//     {
//       name: "Sanzhar",
//       age: 21,
//     },
//   ],
//   //   address: "",
//   address: [],
// };

// Эгер бизге колдонуучунун аты керек болсо чекит нотациясы менен браузерге чыгара алабыз.
// Бирок бирден көп сөздөн турса "user hobbies". Aнда user["user hobbies"] болуп жазуу керек. Бул жерге чекит нотациясы иштебейт.
// console.log(user.name); // => Moldogazy
// console.log(user["user hobbies"][0]); // hiking

// // Объектке жаңы ключ кошуу үчүн
// user.address.push("Bishkek, Kyrgyzstan");

// console.log(user.address); // => Bishkek, Kyrgyzstan

// // Ключту өяүрүү
// delete user.address;
// console.log(user.address); // => undefined

// Объектте бар бардык ключтарды чыгаруучу код
// console.log(Object.keys(user));

// Объектте бар бардык ключтардын маанилерин чыгаруучу код
// console.log(Object.values(user));

/*----------------------------> Условное ветвление и логические операторы, и конструкция switch <----------------------------*/

// let a = "20",
//   b = 20;

// if (a > b) {
//   console.log("Hello!");
// } else {
//   console.log("Not hallo!");
// }

// // Төмөнкү код b'да маани берилсе иштейт жок болсо тескерисинче. Жана бош болсо да иштебейт.
// if (b) {
//   console.log("Hello b!");
// }

// truthy
// falsy'ден башка бардык нерсе кирет

// falsy
// ''
// undefinded
// 0
// false
// null

// Төмөнкү код биринчи экөөнтең бир типке которууга аракет кылат.
// Жана бара болот
// console.log(a == b); // true
// А бул код эч кандай которбойт. Алардын типине карайт жана маанисине каррайт.
// console.log(a === b); // false

// let userAge = 81;

// && -------> AND
// || -------> OR
// !  -------> NOT

// if (userAge < 14) {
//   console.log("Hi baby!");
// } else if (userAge >= 14 && userAge < 18) {
//   console.log("Hi teenage!");
// } else if (userAge >= 18 && userAge < 33) {
//   console.log("Hi adult!");
// } else {
//   console.log("Hi OldMan!");
// }

// let a = false;
// console.log(!a); // true
// console.log(a); // false

// function hello() {
//   console.log("Hello world!");
// }
// hello(); //Hello world!

/*----------------------------> Функциялар <----------------------------*/

// Функцияны жазып жатканда =>  ПАРАМЕТР беребиз
// Функцияны чакырып жатканда =>  АРГУМЕНТ беребиз
function calcSum(x, y) {
  const sum = x + y;
  return sum;
}
let a = 20,
  b = 45;
calcSum(a, b); // 65

console.log(calcSum(10, 20)); // 30
