import React from 'react'

export default ({ciudades}) => (
    <ul className="cities">
        {
            ciudades.map((ciudad, index) => (
                <li className="city" key={index}>
                    <p className="city-name">{ciudad.nombre}</p>
                    <p className="city-temp">Temperatura : {ciudad.temperatura} °C</p>
                    <p className="city-hour">Hora : {new Date(ciudad.hora * 1000).toLocaleTimeString()}</p>
                </li>
            ))
        }
    </ul>
)