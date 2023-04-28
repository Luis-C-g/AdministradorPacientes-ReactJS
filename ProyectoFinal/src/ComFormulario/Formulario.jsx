import React,{useState} from 'react'
import ".//formulario.css"  

export default function Formulario({pacientesprop,setPacientesprop}) {
  const [mascota, setMascota] = useState("")
  const [dueño, setDueño] = useState("")
  const [fecha, setFecha] = useState()
  const [hora, setHora] =useState()
  const [sintomas, setSintomas] = useState()

  function agregarpacientes(){
    const informacion={
      mascota,dueño,fecha,hora,sintomas
    }
    setPacientesprop([...pacientesprop,informacion])
    setMascota ("")
    setDueño ("")
    setFecha ("")
    setHora ("")
    setSintomas ("")
  }

  return (
    <div className='divform'>
      
      <form action="" className='inputform'>
        <label className='titulos' htmlFor="">Nombre de Mascota</label>
        <input className='espacios' onChange={(e)=>{setMascota(e.target.value)}} type="text" value={mascota}/>
        <label className='titulos' htmlFor="">Nombre del dueño</label>
        <input className='espacios'onChange={(e)=>{setDueño(e.target.value)}} value={dueño} type="text"/>
        <label className='titulos' htmlFor="">Fecha</label>
        <input className='espacios' onChange={(e)=>{setFecha(e.target.value)}} value={fecha} type="date"/>
        <label className='titulos' htmlFor="">Hora</label>
        <input className='espacios' onChange={(e)=>{setHora(e.target.value)}} value={hora} type="time" />
        <label className='titulos' htmlFor="">Sintomas</label>
        <textarea className='esptext' onChange={(e)=>{setSintomas(e.target.value)}} value={sintomas} type="text-area"  cols="30" rows="5"/>
        <button className='btn-add' onClick={agregarpacientes} type='button'>Agregar</button>
      </form>
    </div>
  )
}