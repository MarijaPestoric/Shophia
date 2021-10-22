const hamburger = document.querySelector('.hamburger');
const navOl = document.querySelector('.main-nav__menu');

hamburger.addEventListener('click', ()=>{
    navOl.classList.toggle('show');
});