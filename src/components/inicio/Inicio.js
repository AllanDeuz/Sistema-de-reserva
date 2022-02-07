import React from 'react';
import '../../estilos/plantilla.css'
import Carrusel from './Carrusel';

const Inicio = () => (

    <div>

        <body> 

            <main class="main">

                <div class="container" data-aos="fade-up">

                    <main class="contenido-principal">

                        <div class="contenido-principal__contenedor">
                            <div class="portada"><img src={require('../../img/piscina/portada.jpg')} alt="Dome of the German Bundestag" class="contenido-principal__imagen"/></div>
                            <div class="portadat">
                                <h1 class="contenido-principal__titulo">Todo lo necesario para llevar a cabo tus Proyectos.</h1>
                                <p class="contenido-principal__resumen">
                                    Equipamiento completo y accesorios opcionales para piscinas de fibra de vidrio y hormigón.
                                </p>
                            </div>
                        </div>

                    </main>

                    <Carrusel/>

                </div>

            </main>

        </body>
    </div>
);

export default Inicio;