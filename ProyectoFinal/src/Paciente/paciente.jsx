import React from 'react'
import "./paciente.css"

export default function Paciente(props) {
  return (
    <div className='compaciente'>
        <h2>Nombre Mascota: {props.nombre}</h2>
        <h2>Nombre del Dueño: {props.dueño}</h2>
        <h2>Fecha: {props.date}</h2>
        <h2>Hora: {props.hor}</h2>
        <h2>sintomas: {props.sintoms}</h2>
    </div>
  )
}
