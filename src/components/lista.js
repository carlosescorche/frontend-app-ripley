import React from 'react'
import moment from 'moment-timezone'

export default ({ciudades}) => {
    return(
    <ul className="cities">
        {
            ciudades.map((ciudad, index) => (
                <li className="city" key={index}>
                    {
                        console.log()
                    }
                    <p className="city-name">{ciudad.nombre}</p>
                    <p className="city-hour"><b>Zona Horaria:</b> {ciudad.zona}</p>
                    <p className="city-temp"><b>Temperatura:</b> {ciudad.temperatura} ° | {ciudad.resumen}</p>
                    <p className="city-hour"><b>Hora Local:</b> {moment(new Date(ciudad.hora * 1000)).tz(ciudad.zona).format('k:mm:ss')}</p>
                </li>
            ))
        }
    </ul>)
}