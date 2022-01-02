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

// Cart button box feature
const cart = document.querySelector('.cart');
const btnCart = document.querySelector('.btnCart');

btnCart.addEventListener('click', openCart);
function openCart() {
    cart.classList.toggle('hidden');
}

// product counter plus minus button features
const btnPlus = document.querySelector('#btnPlus');
const btnMinus = document.querySelector('#btnMinus');
const productCounter = document.querySelector('.counter');

btnPlus.addEventListener('click', productCounterPlus);
btnMinus.addEventListener('click', productCounterMinus);

let productCounterValue = 1;

function productCounterPlus() {
    setProductCounter(1);
}

function productCounterMinus() {
    setProductCounter(-1);
}

function setProductCounter(value) {
    if ((productCounterValue + value) > 0) {
        productCounterValue += value;
        productCounter.innerHTML = productCounterValue;
    }
}

// handle thumbnail click
const gallery = document.querySelectorAll('.pic');
const heroImg = document.querySelector('.product-hero');

gallery.forEach(img => {
    img.addEventListener('click', onThumbClick);
});

function onThumbClick(event) {
    //clear active state for all thumbnails
    gallery.forEach(img => {
        img.classList.remove('active');
    });
    //set active thumbnail
    event.target.parentElement.classList.add('active');
    //update hero image
    heroImg.src = event.target.src.replace('-thumbnail', '');//--replacing -thumbnail with '' 
}
