// Enlace al Main

export function initMenu() {
    console.log('Menú hamburguesa inicializado');
}

// Menu Flotante

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const menuContainer = document.getElementById('menu-container');
    const header = document.querySelector('header');

    let lastScrollTop = 0;
    let menuVisible = false;

    // Toggle del menú al hacer clic en el icono

    menuIcon.addEventListener('click', () => {
        if (menuVisible) {
            menuIcon.classList.remove('open');
            menu.classList.remove('show');
            menuVisible = false;
        } else {
            menuIcon.classList.add('open');
            menu.classList.add('show');
            menuVisible = true;
        }
    });

    // Controlar visibilidad del menú en función del desplazamiento

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {

            // Desplazamiento hacia abajo

            if (scrollTop > header.offsetHeight) {
                menuContainer.style.opacity = '1';
                menuContainer.style.transform = 'translateY(0)';
            }
        } else {

            // Desplazamiento hacia arriba

            if (scrollTop <= header.offsetHeight) {
                menuContainer.style.opacity = '0';
                menuContainer.style.transform = 'translateY(20px)';
                if (menuVisible) {
                    menuIcon.classList.remove('open');
                    menu.classList.remove('show');
                    menuVisible = false;
                }
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Ocultar el menú si se hace clic fuera de él

    document.addEventListener('click', (event) => {
        if (!menuIcon.contains(event.target) && !menuContainer.contains(event.target) && menuVisible) {
            menuIcon.classList.remove('open');
            menu.classList.remove('show');
            menuVisible = false;
        }
    });

    // Evita que el menú cierre al hacer clic en los enlaces del menú

    menu.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Cerrar el menú al hacer clic en un enlace del menú

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (menuVisible) {
                menuIcon.classList.remove('open');
                menu.classList.remove('show');
                menuVisible = false;
            }
        });
    });

    // Detectar cuando el puntero entra o sale del área del menú

    let insideMenu = false;

    menuContainer.addEventListener('mouseenter', () => {
        insideMenu = true;
    });

    menuContainer.addEventListener('mouseleave', () => {
        insideMenu = false;
        setTimeout(() => {
            if (!insideMenu && menuVisible) {
                menuIcon.classList.remove('open');
                menu.classList.remove('show');
                menuVisible = false;
            }
        }, 100);
    });

    // Opcional: para asegurarse de que el menú no se cierre mientras el puntero está dentro de él

    menu.addEventListener('mouseenter', () => {
        insideMenu = true;
    });

    menu.addEventListener('mouseleave', () => {
        insideMenu = false;
        setTimeout(() => {
            if (!insideMenu && menuVisible) {
                menuIcon.classList.remove('open');
                menu.classList.remove('show');
                menuVisible = false;
            }
        }, 100);
    });
});

// Smooth scroll

const smoothScroll = (target, duration) => {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startPosition + (distance * easeInOutQuad(progress)));

        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    requestAnimationFrame(animation);
};

// Smooth scroll al clicar enlaces en la propia web

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            smoothScroll(targetElement, 1500); // Ajustar duración (1000ms = 1 segundo)
        }
    });
});







