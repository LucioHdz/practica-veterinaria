import React from 'react'
import ItemLista from './ItemLista'
import "./css/Lista.css"



const Lista = ({pacientes}) => {
  return (
    <div className='col-12 col-sm-5 col-md-6 d-flex flex-column align-items-center p-2 scroll-container' >
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