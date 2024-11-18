// Inicializa animaciones generales

export const initMenu = () => {

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

  // Control de desplazamiento

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Desplazamiento hacia abajo

    if (scrollTop > lastScrollTop) {
      if (scrollTop > 100) {  // Ajusta el valor del desplazamiento
        menuContainer.style.opacity = '1';
        menuContainer.style.transform = 'translateY(0)';
      }
    } else {  // Desplazamiento hacia arriba
      if (scrollTop <= 100) {
        menuContainer.style.opacity = '0';
        menuContainer.style.transform = 'translateY(20px)';
      }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
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

};