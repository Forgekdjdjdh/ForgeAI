// Скрипт барои менюи мобилӣ (Burger Menu)
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Фаъол кардани функсия
navSlide();

// Smooth Scroll барои линкҳои дохили саҳифа
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Бо назардошти баландии navbar
                behavior: 'smooth'
            });
            
            // Пӯшидани меню дар ҳолати мобилӣ пас аз клик
            const nav = document.querySelector('.nav-links');
            const burger = document.querySelector('.burger');
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                document.querySelectorAll('.nav-links li').forEach(link => {
                    link.style.animation = '';
                });
            }
        }
    });
});

// Илова кардани эффекти шаффофият ба navbar ҳангоми скролл
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    } else {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
});

console.log("Вебсайт бо муваффақият боргирӣ шуд!");
