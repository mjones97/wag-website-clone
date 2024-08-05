document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: '5',
        spaceBetween: 10,
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
    });

    const slides = document.querySelectorAll('.swiper-slide');
    
    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            
            // Remove active class from all slides
            slides.forEach(slide => {
                slide.classList.remove('active');
            });

            // Hide all category contents
            document.querySelectorAll('.category-content').forEach(content => {
                content.style.display = 'none';
            });

            // Show the selected category content
            document.querySelector(targetId).style.display = 'block';

            // Add active class to the clicked slide
            this.classList.add('active');
            
            // Optional: Scroll to top of content
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Show the first category content by default
    slides[0].click();
});