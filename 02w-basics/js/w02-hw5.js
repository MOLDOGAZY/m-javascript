/**
 * 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
    Пример: "Номер вашей карты: **********1245"
 */

const CARD = prompt("Enter your car number: ", 1234567891011245);
const CARD_LENGTH = CARD.length;
const HIDE_PASSWORD = CARD.slice(0, CARD_LENGTH - 4);
const RETURNER_PASSWORD = CARD.replace(`${HIDE_PASSWORD}`, "************");
console.log(`Your card number is: ${RETURNER_PASSWORD}`);
