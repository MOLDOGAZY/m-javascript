/**
 * Создайте программу, которая запрашивает у пользователя два целых числа a и b, после чего выводит на экран результаты следующих математических операций:
 *
 * - сумма a и b;
 * - разница между a и b;
 * - произведение a и b;
 * - частное от деления a на b;
 * - остаток от деления a на b;
 * - результат возведения числа a в степень b
 */

const a = +prompt("Enter number a", 1999);
const b = +prompt("Enter number b", 99);

const addition = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = a / b;
const remainder = a % b;
const exponentiation = Math.pow(a, b);

console.log(`Addition: ${addition}`);
console.log(`Subtraction: ${subtraction}`);
console.log(`Multiplication: ${multiplication}`);
console.log(`Division: ${division}`);
console.log(`Remainder: ${remainder}`);
console.log(`Exponentiation: ${exponentiation}`);

document.write(`Addition: ${addition} <br>`);
document.write(`Subtraction: ${subtraction} <br>`);
document.write(`Multiplication: ${multiplication} <br>`);
document.write(`Division: ${division} <br>`);
document.write(`Remainder: ${remainder} <br>`);
document.write(`Exponentiation: ${exponentiation}`);
