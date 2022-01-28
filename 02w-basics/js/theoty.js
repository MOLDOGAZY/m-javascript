// const мене иштеп жатканда сөзсүз маанисинда кошуп жазуубуз керек. let / var сыяктуу иштебейт. Б.а. ката болот.

/*-------------------> Төмөнкү код туура эмес <-------------------*/
// const CONSTANTA ;
// CONSTANTA = 3.14;
// console.log(CONSTANTA);

/*-------------------> А моорeки туура <-------------------*/
// const CONSTANTA = 3.14;
// console.log(CONSTANTA);

/*-------------------> Static properties <-------------------*/
// Euler's constant and the base of natural logarithms; approximately 2.718
// const EU = Math.E;
// console.log(EU);

// Natural logarithm of 2; approximately 0.693.
// const LN2 = Math.LN2;
// console.log(LN2);

// Natural logarithm of 10; approximately 2.303.
// const LN10 = Math.LN10;
// console.log(LN10);

// Ratio of a circle's circumference to its diameter; approximately 3.14159.
// const PI = Math.PI;
// console.log(PI);

/*-------------------> Айтишке ката болот <-------------------*/
// ceil жогоруну карай тегеректейт.
// let myFloat = 3.0000000000001;
// let ceilRounded = Math.ceil(myFloat); // => 4
// console.log(ceilRounded);

// floor төмөндү карай тегеректейт.
// let myFloat = 8.999999999999999999999;
// console.log(Math.floor(myFloat)); // => 8

// round жакын тарапка карай тегеректейт.
// let myFloat = 8.999999999999999999999;
// console.log(Math.round(myFloat)); // => 9

// let myFloatR = 8.11111111111111;
// console.log(Math.round(myFloatR)); // => 8

// round үтүрдөн чейинки санды гана алат жана жакын тарапка карай тегеректейт.
// let myFloat = 8.9999;
// console.log(Math.trunc(myFloat)); // => 9

// abs мутлак дегерини берет.
// let myFloat = -8.9999;
// console.log(Math.abs(myFloat)); // => 9

// max эң чоң санды кайтарат
// console.log(Math.max(1, 2, 3, -8, 0.28888, 4, 5)); // => 5

// min эң кичине санды кайтарат
// console.log(Math.min(1, 2, 3, 4, 5, -0.001)); // => -0.001

// pow aны b-даражага көтөрөт
// console.log(Math.pow(2, 4)); // => 16

//  random
// console.log(Math.trunc(Math.random() * 100 + 1)); // => 1 - 100

// sqrt тамырдан санды чыгарат
// console.log(Math.sqrt(9)); // => 3

/*-------------------> Strign <-------------------*/
// \ Экранирование деп аталат
// let str = '"It\'s great." he said.';
// console.log(str);

// let str = "MOLDOGAZY KABYLBEKOV";
// console.log(str[str.length - 1]); // => V

// concat сөздү бириктирүү
// let firstName = "Молдогазы";
// let lastName = "Кабылбеков";
// console.log(firstName); // => Молдогазы
// console.log(lastName); // => Кабылбеков
// console.log(firstName.concat(" ", lastName)); // => Молдогазы Кабылбеков

// repeat
// let MOLDOGAZY = "Молдогазы ";
// console.log(MOLDOGAZY.repeat(3)); // => Молдогазы Молдогазы Молдогазы

// includes
// let str = "Молдогазы Кабылбеков";
// console.log(str.includes("Кабылбеков")); // => true

// replace
// let str = "Молдогазы Кабылбеков";
// let newStr = str.replace("Кабылбеков", "Кабылбеков 2");
// console.log(newStr); // => Молдогазы Кабылбеков Молдогазы

// slice vs substring экоо тең дээрлик бирдей кызматты аткарат.
// let str = "Молдогазы Кабылбеков";
// console.log(str.slice(5, 18)); // => газы Кабылбек
// console.log(str.substring(5, 18)); // => газы Кабылбек

// toUpperCase
// let firstName = "молдогазы";
// console.log(firstName); // => молдогазы
// let newName = firstName[0].toUpperCase();
// let newUpperedName = newName.concat(firstName.slice(1));
// console.log(newUpperedName); // => Молдогазы

// trim башындагы жана аягындагы пробелди өчүрөт
// let str = "  Молдогазы Кабылбеков  ";
// console.log(str.trim()); // => Молдогазы Кабылбеков

// Шаблонные строки
// let userName = "Молдогазы";
// let welcomeMessage = `Hallo, ${userName}!`;
// console.log(welcomeMessage); // => Hallo, Молдогазы!

/*-------------------> Array <-------------------*/
let arrName = [
  "Молдогазы",
  "Кабылбеков",
  "Санжарбек",
  "Абдулжан",
  "Абдулжанова",
];
// console.log(arrName[0]); // => Молдогазы
// console.log(arrName[100]); // => undefined
// arrName.push("Атамбеков"); // push массивдин акырына кошот
// console.log(arrName);

console.log(arrName.pop()); // => Абдулжанова pop'ко маани берүүнүн кереги жок жана массивдин акырынан өчүрөт
console.log(arrName); // Молдогазы Кабылбеков Санжарбек Абдулжан
