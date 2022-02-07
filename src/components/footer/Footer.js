import React from 'react';
import Contacto from './Contacto';
import Cotiza from "./Cotiza";
import Horario from './Horario';
import Mapa from "./Mapa";
import { Marcas } from './Marcas';
//importar mi archivo style.css
import '../../estilos/style.css';

const Footer = () => {

    return (    
        <div>

            <footer className="footer">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">

                            <div className="footer-left">
                                <Cotiza/> 
                                <Contacto/>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">

                            <div className="footer-right">

                                <h2>Ubicacion geografica</h2>
                                <Mapa/>
                                <Horario/>
                            </div>

                        </div>

                        <Marcas/>

                    </div>

                </div>

            </footer>

        </div>

    );

};

export default Footer;
