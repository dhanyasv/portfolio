//Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuBtnLinks = document.querySelector('.menu-all-links');
const menuNavItem = document.querySelectorAll('.menu-item');

//set menu state

let menuShow = false;
menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    console.log("sdsdd")
    if(!menuShow){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuBtnLinks.classList.add('show');
        menuNavItem.forEach(item => {
            item.classList.add('show');
            menuShow = true;
        });
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuBtnLinks.classList.remove('show');
        menuNavItem.forEach(item => {
            item.classList.remove('show');
            menuShow = false;
        });
    }
}