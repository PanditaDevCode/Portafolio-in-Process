import React from 'react';

const AboutMe = () => {

    return (

        <section className="aboutMe">

            <div id="aboutme">

                <div className="aboutmeimg" id="aboutMeInfo">
                    <img src="/assets/images/alex.jpeg" className="border-neon" alt="Imagen de Alex" />
                </div>

            </div>

            <div className="aboutMeInfo">

                <h1>Alexander Moncada</h1>
                <h2>También conocido como <span>"Pandita Malware"</span></h2>

                <p>
                    Desde muy joven me llamó la atención el mundo cibernético, fue ahí donde descubrí
                    la <span>ciberseguridad</span> y me di cuenta que en ese mundo se utiliza bastante la
                    <span>Programación</span>, desde entonces me he dedicado a aprender <span>varios lenguajes
                        de programación</span> sin dejar de lado la <span>seguridad cibernética.</span>
                </p>

            </div>

        </section>

    );
};

export default AboutMe;