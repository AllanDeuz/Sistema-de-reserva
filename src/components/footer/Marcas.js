import React from 'react';
//importar marcas.GIF
import marcas from '../../img/marcas.GIF';

export const Marcas = () => {
  return <div className='marcas'> 
            <h6>Nuestras marcas</h6>
                    
            <nav>

                <img className='pie' src={marcas}/>

            </nav>
            <h6 className='admin'>Web diseñada por @Deuz</h6>
        </div>;
};
