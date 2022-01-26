/**
 * 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.
 */

const souvenirs = +prompt(`How many souvenirs did you buy?`, 55.21);
const trinkets = +prompt(`How many trinkets did you buy:`, 999.9);

console.log(
  `The total weight of your package: ${75 * souvenirs + trinkets * 112} g`
);
document.write(
  `The total weight of your package: ${75 * souvenirs + trinkets * 112} g`
);
