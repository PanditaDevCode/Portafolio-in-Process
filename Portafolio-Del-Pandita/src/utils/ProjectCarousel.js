// Función para inicializar el carrusel

export const initCarousel = () => {

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

    // Iniciar el carrusel después de que la animación de entrada haya terminado

    setTimeout(() => {
        updateCarousel();
        startAutoSlide();
    }, 2000);  // Espera a que la animación de entrada termine 

};