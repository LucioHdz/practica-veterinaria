import React from "react";

const ItemLista = ({paciente}) => {
  return (
    <div className="d-flex rounded border border-primary-subtle shadow col-12 p-1 mb-4">
      <img src={URL.createObjectURL(paciente.imagen)} alt="imagen de mascota" width={"150px"} height={"150px"} />
      <div className="d-block text-start ms-3 ">
        <h4 className="text-dark">{paciente.nombre}</h4>
        <small className="text-primary"><a  className = "link-primary link-underline link-underline-opacity-0" href={`https://wa.me/${paciente.contacto}`} target="_blank">{paciente.contacto}</a></small>
        <p className="text-secondary">{paciente.padecimiento}</p>
      </div>
    </div>
  );
};

export default ItemLista;
