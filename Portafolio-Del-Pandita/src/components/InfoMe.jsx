import React from 'react';

const InfoMe = () => {

    return (

        <section className="info-me">

            <div className="info">

                <h1>Hola, mi nombre es Alex</h1>
                <h2>"Pandita Dev Code"</h2>

                <p>
                    Soy un <span>Desarollador Web</span> en constante aprendizaje y <span>Creador de Contenido</span>.
                    Estoy explorando nuevas tecnologías <span>Front-end</span> y <span>Back-end</span> y he creado <span>proyectos</span> para compartir lo que he aprendo."
                </p>

                <button>Proyectos</button>

            </div>

            <div className="border-neon">
                <img src="/assets/images/alex.jpeg" alt="Foto de Alex" />
            </div>

        </section>

    );
};

export default InfoMe;