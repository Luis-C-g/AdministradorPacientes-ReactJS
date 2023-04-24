import React,{useState} from 'react'
import ".//formulario.css"

export default function Formulario() {
  const [mascota,setMascota]=useState("")
  const [dueno,setDueno]=useState("")

  return (
    <div>
      <form action="" className='inputform'>
        <label htmlFor="">Nombre de Mascota</label>
        <input onChange={(e)=>{setMascota(e.target.value)}} type="text" value={mascota} />
        <label htmlFor="">Nombre del dueño</label>
        <input onChange={(e)=>{setDueno(e.target.value)}} value={dueno} type="text" />
        <button type='submit'>Agregar</button>
      </form>
    </div>
  )
}
