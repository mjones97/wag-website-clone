const swiper = new Swiper('.mySwiper', {
        slidesPerView: '5',
        spaceBetween: 20,
});

const slides = document.querySelectorAll('.swiper-slide');

slides.forEach(slide => {
    slide.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        document.querySelectorAll('.category-content').forEach(content => {
            content.style.display = 'none';
        });

        document.querySelector(targetId).style.display = 'block';

        this.classList.add('active');
        
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

slides[0].click();

const swiper1 = new Swiper('.swiper-container-1', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
    },
});

const swiper2 = new Swiper('.swiper-container-2', {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2'
    },
});