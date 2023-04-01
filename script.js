const btn = document.querySelector('#add');
const circle = document.querySelector('.circle');
const burger = document.querySelector('#burgerImg');
const firstArrow = document.querySelector('#firstArrow');
const secondArrow = document.querySelector('#secondArrow');
const thirdArrow = document.querySelector('#thirdArrow');
const infosNutri = document.querySelector('.infosNutri');
const infosAllergenes = document.querySelector('.infosAllergenes');

var scrollCircle;
var scrollBurger;
window.addEventListener('scroll', function() {
    // CIRCLE
    const scrollTop = document.documentElement.scrollTop;
    scrollCircle = (scrollTop * -1.5) -150;
    scrollCircle = Math.floor(scrollCircle);

    circle.style.transition = "0s";
    circle.style.right = scrollCircle + "px";

    // BURGER
    scrollBurger = (scrollTop * -1.5) + 30;
    scrollBurger = Math.floor(scrollBurger);

    burger.style.transition = "0s";
    burger.style.right = scrollBurger + "px";
});

burger.style.transition = "0.4s";
btn.addEventListener('mouseover', () => { 
    circle.style.transition = "0.3s";
    burger.style.transition = "0.3s";
    btn.style.backgroundColor = "#FFB800";
    circle.style.backgroundColor = "#FFB800";
    
    circle.style.right = -150 + "px";
    burger.style.right = 30 + "px";
});

btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = "#F0482D";
    circle.style.backgroundColor = "#F0482D";
    
    circle.style.right = scrollCircle + "px";
    burger.style.right = scrollBurger + "px";
});

function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
}
function openTab(url) {
    window.open(url, "_blank");
}

// Js SWIPER Ingrédients

const nextButton = document.querySelector('.swiper-button-next');
const prevButton = document.querySelector('.swiper-button-prev');
const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
const swiperElement = document.querySelector('.swiper');

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
    },
});

nextButton.style.color = 'white';
prevButton.style.color = 'white';
swiperElement.style.width = '0px';
swiperElement.style.height = '0px';
swiperElement.style.transition = "0.3s"
firstArrow.style.transition = "0.3s"
secondArrow.style.transition = "0.3s"
thirdArrow.style.transition = "0.3s"

var clicks = 0;
document.querySelector('.dropdown1').addEventListener('click', () => {
    clicks++;

    if(clicks === 1) {
        swiperElement.style.width = '864px';
        swiperElement.style.height = '250px';
        swiperElement.style.marginBottom = '20px';

        firstArrow.style.transform = "rotate(180deg)"
    } else if(clicks === 2) {
        swiperElement.style.width = '0px';
        swiperElement.style.height = '0px';
        swiperElement.style.marginBottom = '0px';

        firstArrow.style.transform = "rotate(0deg)"
        clicks = 0;
    }
});

infosNutri.style.display = "none"

var clicks3 = 0;
document.querySelector('.dropdown3').addEventListener('click', () => {
    clicks3++;

    if(clicks3 === 1) {
        infosNutri.style.display = "block"
        thirdArrow.style.transform = "rotate(180deg)"
    } else if(clicks3 === 2) {
        infosNutri.style.display = "none"
        thirdArrow.style.transform = "rotate(0deg)"
        clicks3 = 0;
    }
});

infosAllergenes.style.display = "none"

var clicks2 = 0;
document.querySelector('.dropdown2').addEventListener('click', () => {
    clicks2++;

    if(clicks2 === 1) {
        infosAllergenes.style.display = "block"
        secondArrow.style.transform = "rotate(180deg)"
    } else if(clicks2 === 2) {
        infosAllergenes.style.display = "none"
        secondArrow.style.transform = "rotate(0deg)"
        clicks2 = 0;
    }
});
