window.addEventListener("load", () => {
  // function hello() {
  //   alert("Hello from Alert!!!");
  // }

  // const button = document.querySelector(".button");
  // const title = document.querySelector(".title");
  // const body = document.querySelector("body");

  // button.addEventListener("click", function () {
  //   button.classList.toggle("button");
  // });

  // button.addEventListener("click", () => {
  //   title.classList.toggle("title-active");
  //   body.classList.toggle("body-active");
  //   button.classList.toggle("button-active");
  // });

  // const blocks = document.querySelectorAll(".box");

  // blocks.forEach((i) => {
  //   i.addEventListener("mouseenter", () => {
  //     i.classList.toggle("mouseenter-active");
  //   });
  // });

  // blocks.addEventListener("click", addClass);

  // function addClass(event) {
  //   event.target.parentNode.classList.add("body-active");
  // }

  // mouse-leave
  // const mouseLeave = document.querySelector(".mouse-leave");
  // mouseLeave.addEventListener("mouseleave", () => {
  //   mouseLeave.style.background = "green";
  // });

  // const link = document.querySelector(".link");
  // link.addEventListener("click", (e) => {
  //   //  e.preventDefault();
  // });

  // const form = document.querySelector(".form");
  const formInput = document.querySelector(".form-input");
  const formBtn = document.querySelector(".form-btn");

  const p = document.createElement("p");

  formBtn.addEventListener("click", () => {
    const userInput = formInput.value;
    console.log(userInput);

    formInput.value = "";
  });
});
