// Enlace al Main
export function initCarousel() {
    console.log('Carrusel inicializado');
}

// Carrusel Portafolio
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
let autoSlideInterval;
let interactionTimeout;

// Función para actualizar la posición del carrusel
function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active', 'left', 'right');

        if (index === currentIndex) {
            item.classList.add('active');
        } else if (index === (currentIndex - 1 + items.length) % items.length) {
            item.classList.add('left');
        } else if (index === (currentIndex + 1) % items.length) {
            item.classList.add('right');
        }
    });
}

// Función para iniciar el desplazamiento automático
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 2500);
}

// Función para detener el desplazamiento automático
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Función para manejar la interacción con retraso y animación lenta
function delayedInteraction(index) {
    clearTimeout(interactionTimeout);
    interactionTimeout = setTimeout(() => {
        currentIndex = index;
        updateCarousel();
    }, 1000);
}

// Eventos de hover para manejar la interacción manual
items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        stopAutoSlide();
        delayedInteraction(index);
    });

    item.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
});

// Integrar ScrollTrigger para controlar la animación de entrada y salida
gsap.registerPlugin(ScrollTrigger);

// Animación de entrada cuando se entra a la sección
function animateCarouselIn() {
    gsap.fromTo(carousel, 
        { opacity: 0, y: -100 }, // Estado inicial
        { opacity: 1, y: 0, duration: 1, onComplete: () => updateCarousel() }
    );
}

// Animación de salida
function animateCarouselOut() {
    gsap.to(items, {
        y: 100, // Caen hacia abajo
        opacity: 0, // Desaparecen
        duration: 1,
        stagger: 0.2, // Retraso entre los elementos
        onComplete: () => {
            items.forEach(item => {
                item.style.opacity = 0; // Asegúrate de que la opacidad sea 0 al salir
                item.style.transform = 'translateY(0)'; // Reinicia la posición
            });
        }
    });
}

// Integrar ScrollTrigger para activar animaciones
ScrollTrigger.create({
    trigger: ".portafolio", // La sección donde está el carrusel
    start: "top 80%", // Cuando la parte superior de la sección esté al 80% de la ventana
    onEnter: () => {
        animateCarouselIn(); // Llama a la animación de entrada
        startAutoSlide(); // Comienza el desplazamiento automático
    },
    onLeave: () => {
        animateCarouselOut(); // Llama a la animación de salida
    },
    onEnterBack: () => {
        animateCarouselIn(); // Se activa cuando el usuario vuelve a la sección
    },
    onLeaveBack: () => {
        animateCarouselOut(); // Se activa cuando el usuario hace scroll hacia arriba y sale de la sección
    }
});

// Iniciar el carrusel después de que la animación de entrada haya terminado
setTimeout(() => {
    updateCarousel();
    startAutoSlide();
}, 2000);  // Espera a que la animación de entrada termine 
