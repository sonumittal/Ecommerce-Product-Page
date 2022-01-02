// Mobile device side menu features 
const menu = document.querySelector('.menu');
const btnHamburger = document.querySelector('.hamburger');
const btnMenuClose = document.querySelector('#btnMenuClose');

btnHamburger.addEventListener('click', onHamburgerClick);
function onHamburgerClick() {
    menu.classList.remove('hidden');
}
btnMenuClose.addEventListener('click', onBtnMenuCloseClick);
function onBtnMenuCloseClick() {
    menu.classList.add('hidden');
}