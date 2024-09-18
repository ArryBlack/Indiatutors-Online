const menuBtn = document.querySelector('.mobile_menu_btn');
const menu = document.querySelector('.mobile_menu');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('mobile_menu_hidden');
});