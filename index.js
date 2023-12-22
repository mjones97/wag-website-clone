function toggleNav() {
    var mobileMenu = document.querySelector('.mobile-menu')
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
    mobileMenu.style.display = 'block';
}

const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})
