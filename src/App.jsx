import React, { useState } from 'react'
import Formulario from './components/Formulario'
import Lista from './components/Lista/Lista'

const App = () => {
  const [pacientes,setPacientes] = useState([]);
  return (
    <div className=' d-flex flex-wrap align-items-center '>
      <h1 className="col-12 text-center text-primary navbar-fixed-top "> 
      <i class="bi bi-hearts">Veterinaria</i>
      </h1>
      <div className='col-12 d-flex justify-content-between mt-5'>
      <Formulario setPacientes = {setPacientes} pacientes = {pacientes}/>
      <Lista pacientes = {pacientes}/>
      </div>
    </div>
  )
}

export default App