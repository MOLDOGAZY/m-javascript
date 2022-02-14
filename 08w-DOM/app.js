// /*--------------------------- Recursive Function ---------------------------*/

// // function kartoshkaArchygych(kartoshkaSany) {
// //   console.log("Ushuncha kartoshka kaldy:" + kartoshkaSany);
// //   kartoshkaSany--;
// //   if (kartoshkaSany > 0) {
// //     kartoshkaArchygych(kartoshkaSany);
// //   }
// // }
// // kartoshkaArchygych(99);

// /*--------------------------- Classic Function ---------------------------*/

// // function kartoshkaArchy(sanKartoshka) {
// //   for (let i = sanKartoshka; i > 0; i--) {
// //     console.log("Ushuncha kartoshka kaldy:", i);
// //   }
// // }
// // kartoshkaArchy(20);

// // const helloSection = document.querySelector(".hello");
// // const eskiTitle = helloSection.querySelector("h1");

// // const zhanyTitle = document.createElement("h2");

// // zhanyTitle.appendChild(document.createTextNode("Zhany super title!"));
// // helloSection.replaceChild(zhanyTitle, eskiTitle);

// // const list = document.querySelector("ul");
// // const allItemsList = list.querySelectorAll("li");

// // // allItemsList[0].remove();

// // allItemsList.forEach((e) => {
// //   e.remove();
// // });

// const firstItem = document.querySelector("li:first-child");

// const linkInFirstItem = firstItem.children[0];
// console.log(linkInFirstItem);

// // get classes
// // console.log(linkInFirstItem.className);
// // console.log(linkInFirstItem.classList);

// // add class
// // linkInFirstItem.classList.add("hello-link");

// // remove class
// // linkInFirstItem.classList.remove("link");

// // toggle class
// // linkInFirstItem.classList.toggle("link");

// // get atribute value
// console.log(linkInFirstItem.getAttribute("href"));

// // get atribute
// console.log(linkInFirstItem.attributes);

// // set atribute
// linkInFirstItem.setAttribute("href", "https://www.github.com/MOLDOGAZY");
// linkInFirstItem.setAttribute("title", "MOLDOGAZY");
// linkInFirstItem.setAttribute("target", "_blank");

// // check atribute
// console.log(linkInFirstItem.hasAttribute("alt")); // false
// linkInFirstItem.removeAttribute("class");

const button = document.querySelector("button");
console.log(button.dataset);
console.log(button.dataset.number);
console.log(button.dataset.hello);
console.log(button.dataset.testAttrib);
button.dataset.hello02 = "zhany data atrib";

button.removeAttribute("data-hello");
