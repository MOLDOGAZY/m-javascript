/**
 * 3. Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.
 */

let userName = "Молдогазы";
let userSurname = "Кабылбеков";
let userAge = "21";
let userLocation = "Кыргызстан, Бишкек";
let userStatus = "Студент";
let userEmail = "moldogazy.kabylbekov.kk@gmail.com";

let userInfo = `Аты-жөнү: ${userName} ${userSurname}
Жашың: ${userAge}
Жашаган жери: ${userLocation}
Статусy: ${userStatus}
Электрондук почта: ${userEmail}`;

document.write(userInfo);
console.log(userInfo);
alert(userInfo);
