/**
 *  1. Дана строка **'ddd@bbb@ccc'**. Замените все @ на '!'
 */

const STR = "ddd@bbb@ccc";
const REPLACER = STR.replace(/@/gi, "!");
console.log(REPLACER);
