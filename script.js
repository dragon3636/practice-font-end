//copy menu for mobile
function copyMenu(params) {
    //  copy inside  .dpt-cat to .departments
    const dptCategory = document.querySelector('.dpt-cat');
    const dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    // copy inside nav to nav
    const mainNav = document.querySelector('.header-nav nav');
    const navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    // copy header-top to thetop-nav
    const topNav = document.querySelector('.header-top .wrapper');
    const topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();
// show mobile menu
const menuButton = document.querySelector('.trigger')
const closeButton = document.querySelector('.t-close')
const addclass = document.querySelector('.site')
menuButton.addEventListener('click', (e) => addclass.classList.toggle('showmenu'));
closeButton.addEventListener('click', (e) => addclass.classList.remove('showmenu'));
// show sub menu on mobile
const subMenu = document.querySelectorAll('.has-child .icon-small');
subMenu.forEach(menu => menu.addEventListener('click', toggle));
function toggle(e) {
    e.preventDefault();
    subMenu.forEach(item => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand')
        this.closest('.has-child').classList.toggle('expand');
}
// slider with swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});
//show bottom-search
const searchButton = document.querySelector(".t-search");
const tClose = document.querySelector(".search-close");
const showClass = document.querySelector(".site");
searchButton.addEventListener('click', () => {
    showClass.classList.toggle('showsearch');
})
tClose.addEventListener('click', () => {
    showClass.classList.remove('showsearch')
})
// show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger");
const dptClass = document.querySelector(".site");
dptButton.addEventListener('click', () => {
    dptClass.classList.toggle("showdpt");
})
// product image slider
var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    // watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});

var productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb
    }
})
// stock products bar width percentage
var stocks = document.querySelectorAll(".products .stock");
console.log("🚀 ~ stocks length:", stocks.length)
for (let x = 0; x < stocks.length; x++) {
    let stock = stocks[x].dataset.stock;
    console.log("🚀 ~ stock:", stock)
    let available = stocks[x].querySelector('.qty-available').innerHTML;
    console.log("🚀 ~ available:", available)
    let sold = stocks[x].querySelector(".qty-sold").innerHTML;
    console.log("🚀 ~ sold:", sold)
    let precent = sold * 100 / stock;
    console.log("🚀 ~ precent:", precent)
    stocks[x].querySelector(".avaiable").style.width = precent + '%';
}