
const heroSwiper = new Swiper('.hero--carousel', {
    loop: true,
    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});