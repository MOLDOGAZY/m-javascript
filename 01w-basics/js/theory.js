//Бул бир саптык коммент болуп эсептелинетю

/*А бул болсо көп саптык коммент болуп эсептелинет ))
=======================================================
What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
*/

// en: alert; kg:эскертүү; ru: тревога
// alert("Салам дүйнө!");
// ======================================

// Эгер консолго ТЕКСТ жаза турган болсок сөзсүз тырмакчанын ичине жазуубуз керек.
// console.log("Салам дүйнө!");
// ======================================

// en: variable; kg: өзгөрмө; ru: переменная
// var userName = "Молдогазы",
//   userSurname = "Кабылбеков";
// ======================================

// Эгерөзгөрмөнү консолго жаза турган болсок. Анда тырмакчанын кереги жок!
// var user = userName + " " + userSurname;
// console.log(user);
// ======================================

// userAge ++
// polzovatel +-
// user-Age --
// user12 +-
// 12user --
// user_name +-
// User +-
// user+ --
// $ +-
// _user +-

/*Types data | Маалыматтардые  түрлөрү | Типы данных*/
// ======================================

/** primitives --> примитивные (простые) типы данных
 * strign --> строка
 * number --> число
 * boolean --> булевое значение | true/false
 * null (let car = null;) --> ничего нет | пустота | нет значения | нет значения переменной | объевили переменную и не присвоили ей значение
 * undefined --> неопроделонное значение | не определено
 * symbol --> символ  || let symbol = Symbol("name");
 *
 */

/** reference --> сложные типы данных
 * object --> объект
 * array --> массив
 * function --> функция
 * data --> дата
 */

// let today = new Date();
// console.log(today);

// let userName = prompt("Атыңыз ким?", "Белгисиз");
// alert(`Салам ${userName} кодинг дүйнөсүнө кош келдиңиз :))`);

let widthRoom = Number(prompt("Бөлмөнүн узундугун жазыңыз:", "888888888"));
let heightRoom = +prompt("Бөлмөнүн туурасын жазыңыз:", "0.0099");

let sumRoom = widthRoom * heightRoom;
alert(`Бөлмөнүн аянты: ${widthRoom}`);
console.log(`Бөлмөнүн аянты: ${widthRoom}`);
