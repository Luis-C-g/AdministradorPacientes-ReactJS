import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './comheader/Header'
import Formulario from './ComFormulario/Formulario'
import Paciente from './Paciente/paciente'

function App() {
  const [pacientes, setPacientes] = useState([])

  return (
    <div className='divprincipal'>
      <Header titul="ADMINISTRADOR DE PACIENTES"></Header>
      <div className="componentes">
        <div className='comp'>
          <Header titul="CREAR CITA"></Header>
          <Formulario pacientesprop={pacientes} setPacientesprop={setPacientes}></Formulario>
        </div>
        <div className='comp'>
          <Header titul="LISTA DE PACIENTES"></Header>
          {pacientes.map((paciente)=>{
            return <Paciente nombre={paciente.mascota} dueño={paciente.dueño} date={paciente.fecha} hor={paciente.hora} sintoms={paciente.sintomas}></Paciente>
          })}
          

        </div>
      </div>
    </div>
  )
}

export default App
