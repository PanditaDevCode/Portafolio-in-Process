// Inicializa animaciones generales

export const initMain = () => {

    // Puntero

    const handleMouseMove = (event) => {
        const light = document.querySelector('.light');
        if (light) {
            light.style.left = `${event.clientX - light.offsetWidth / 2}px`;
            light.style.top = `${event.clientY - light.offsetHeight / 2}px`;
        }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animación de fondo

    window.addEventListener('scroll', () => {
        if (window.scrollY > 250) {
            document.body.classList.add('solid-background');
        } else {
            document.body.classList.remove('solid-background');
        }
    });
};