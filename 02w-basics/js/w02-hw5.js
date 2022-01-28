/**
 * 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
    Пример: "Номер вашей карты: **********1245"
 */

const CARD_NUMBER = prompt("Введите номер карты", 1234567891011245);
const CARD_NUMBER_LAST_FOUR = CARD_NUMBER.slice(-4);
const CARD_NUMBER_HIDE = CARD_NUMBER.slice(0, -4).replace(
  /123456789101/gi,
  "************"
);

const CARD_NUMBER_HIDE_LAST_FOUR = CARD_NUMBER_HIDE.concat(
  "",
  CARD_NUMBER_LAST_FOUR
);

console.log(`Your card number: ${CARD_NUMBER_HIDE_LAST_FOUR}`);
document.write(`Your card number: ${CARD_NUMBER_HIDE_LAST_FOUR}`);
