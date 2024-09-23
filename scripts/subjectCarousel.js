const subjectSwiperIT = new Swiper('.IT_Swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000, // Time between slides (in milliseconds)
        disableOnInteraction: false, // Autoplay will not be disabled after user interaction (e.g., swiping)
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper_it--next',
        prevEl: '.swiper_it--prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        620: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 4,
        },
    },
});
const subjectSwiperAcademics = new Swiper('.academics_Swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000, // Time between slides (in milliseconds)
        disableOnInteraction: false, // Autoplay will not be disabled after user interaction (e.g., swiping)
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper_it--next',
        prevEl: '.swiper_it--prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        620: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 4,
        },
    },
});
