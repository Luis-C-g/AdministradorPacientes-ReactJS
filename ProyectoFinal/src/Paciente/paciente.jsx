import React from 'react'
import "./paciente.css"

export default function Paciente(props) {
  return (
    <div className='compaciente'>
        <p className='titdat'>NOMBRE MASCOTA: <span className='rdat'>{props.nombre}</span></p>
        <p className='titdat'>NOMBRE DE DUEÑO: <span className='rdat'>{props.dueño}</span></p>
        <p className='titdat'>FECHA: <span className='rdat'>{props.date}</span></p>
        <p className='titdat'>HORA: <span className='rdat'>{props.hor}</span></p>
        <p className='titdat'>SINTOMAS: <span className='rdat'>{props.sintoms}</span></p>
    </div>
  )
}
