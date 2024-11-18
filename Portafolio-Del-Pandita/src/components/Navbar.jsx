import React from 'react';

const Navbar = () => {

    return (

        <header id="header" className="header">

            <a href="#" className="logo">Pandita Dev Code</a>

            <nav className="navbar">

                <ul>

                    <li><a href="#aboutMeInfo" className="navmenu">Acerca de Mi</a></li>
                    <li><a href="#portafolio" className="navmenu">Portafolio</a></li>
                    <li><a href="#redes Sociales" className="navmenu">Redes Sociales</a></li>
                    <li><a href="#certificados" className="navmenu">Certificados</a></li>
                    <li><a href="#contacto" className="navmenu">Contacto</a></li>

                </ul>

            </nav>

        </header>

    );
};

export default Navbar;