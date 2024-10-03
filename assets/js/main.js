// Enlace General a JS

import { initCarousel } from './carrusel.js';
import { initMenu } from './menuhamburgesa.js';

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initMenu();
});





// Puntero

document.addEventListener('mousemove', (event) => {
    const light = document.querySelector('.light');
    light.style.left = `${event.clientX - light.offsetWidth / 2}px`;
    light.style.top = `${event.clientY - light.offsetHeight / 2}px`;
});





// Zoom in-out button

const navItems = document.querySelectorAll('.navmenu');

navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('zoom');
        item.classList.remove('no-zoom');
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('zoom');
        item.classList.add('no-zoom');
    });
});

const button = document.getElementById('zoomButton');

button.addEventListener('mouseover', () => {
    button.classList.add('zoom');
    button.classList.remove('no-zoom');
});

button.addEventListener('mouseout', () => {
    button.classList.remove('zoom');
    button.classList.add('no-zoom');
});





// Blur NavBar

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('abajo', window.scrollY > 0);
});





// Background Animation

window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        document.body.classList.add('solid-background');
    } else {
        document.body.classList.remove('solid-background');
    }
});





// Efecto Scroll

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"], button').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();

            let targetId = anchor.getAttribute('href') || anchor.dataset.target; // Si es un botón, usar data-target
            let targetElement = document.getElementById(targetId.substring(1));

            if (targetElement) {
                smoothScroll(targetElement, 1000); // 1000ms = 1 segundo
            }
        });
    });
});

// Función de scroll suave
function smoothScroll(target, duration) {
    let targetPosition = target.getBoundingClientRect().top + window.scrollY;
    let startPosition = window.scrollY;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
