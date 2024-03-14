import React from 'react'
import ItemLista from './ItemLista'
import "./css/Lista.css"



const Lista = ({pacientes}) => {
  return (
    <div className='col-6 d-flex flex-column align-items-center p-2 me-5 scroll-container' >
        {pacientes.map(
            (paciente,index)=>{
                return(
                    <ItemLista key={index} paciente = {paciente}/>
                )
            }
        )}
    </div>
  )
}

export default Lista