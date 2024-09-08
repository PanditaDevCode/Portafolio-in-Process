// Enlace General

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