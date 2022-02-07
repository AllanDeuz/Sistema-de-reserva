import React from 'react';

const Cotiza = () => (
    
    <div className='cotiza' data-aos="flip-right">
        <h2 >Realiza tu Cotización</h2>

        <div class="form">

            <form class="form" action="enviar_form.php" method="post">

                <div class="inputs">

                    <div class="input">
                        <input class="texto" type="text" name="nom" placeholder="NOMBRE" required></input> 
                    </div>

                    <div class="input">
                        <input class="number" type="number" name="fono" placeholder="TELEFONO" required></input> 
                    </div>

                    <div class="input">
                        <textarea class="ttexto" name="cotizacion" placeholder="COTIZACION" required></textarea> 
                    </div>

                    <div class="input">
                        <input class="texto" name="correo" type="email" placeholder="CORREO" required></input> 
                    </div>

                    <div class="boton">
                        <button class="boton" type="submit"><h3 class="enviar" >ENVIAR</h3></button>
                    </div>

                </div>

            </form>

        </div>
    </div>
);

export default Cotiza;