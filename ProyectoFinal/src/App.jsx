import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Formulario from './ComFormulario/Formulario'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='divprincipal'>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <article className='componens'>
        <Formulario/>
      </article>
      
    </div>
  )
}

export default App
