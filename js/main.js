/* abrir y cerrar menu */

var sliderBar = document.querySelector(".slidebar");

let sliderBarBtnOff = document.querySelector(".bx-x");
let sliderBarOff = document.querySelector(".home_section");
console.log(sliderBarBtnOff);
sliderBarBtnOff.addEventListener("click", () => {
  sliderBar.classList.toggle("close");
  sliderBarOff.classList.toggle("close");
});

let sliderBarBtn = document.querySelector(".bx-menu");
let sliderBarOn = document.querySelector(".home_section");
console.log(sliderBarBtn);
sliderBarBtn.addEventListener("click", () => {
  sliderBar.classList.toggle("close");
  sliderBarOn.classList.toggle("close");
});

/* sub menu desplegable */

let arrow = document.querySelectorAll("#arrow");
console.log(arrow);
for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("show_menu");
    });
  }

/* efecto de tipado */

const type = new Typed('#typed', {
    strings: ['Desarrollador Front-End','Diseñador Gráfico'],
    typeSpeed: 75,
    startDelay: 1200,
    backSpeed: 75,
    backDelay: 3000,
    loop: true,
    loopCount: false,
});
