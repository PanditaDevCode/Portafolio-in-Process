import React, { useEffect } from "react";
import { initMenu } from "../utils/HamburgerMenu";

const HamburgerMenu = () => {

  useEffect(() => {
    initMenu();
  }, []);

  return (

    <div id="menu-container" className="menu-container">

      <div id="menu-icon" className="menu-icon">

        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>

      </div>

      <nav id="menu" className="menu">

        <a href="#header">Inicio</a>
        <a href="#aboutMeInfo">Acerca de Mi</a>
        <a href="#portafolio">Portafolio</a>
        <a href="#redessociales">Redes Sociales</a>
        <a href="#certificados">Certificados</a>
        <a href="#contacto">Contacto</a>

      </nav>

    </div>

  );
};

export default HamburgerMenu;