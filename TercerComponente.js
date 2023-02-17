import React from 'react'
import {PropTypes} from 'prop-types';

export const TercerComponente=({nombre, apellidos, ficha}) => {

    console.log(props);

  return (
    <div>
        <h1>Comunicación entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha_medica.grupo}</li>
            <li>{ficha_medica.estado}</li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string,
    apellidos: PropTypes.string,
    ficha_medica: PropTypes.object
}