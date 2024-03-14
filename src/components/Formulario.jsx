import React, { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ pacientes, setPacientes }) => {
  const [contacto, setContacto] = useState("");
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [padecimiento, setPadecimiento] = useState("");

  const agregarPaciente = (e) => {
    e.preventDefault();
    console.log(imagen);
    if (imagen == null) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        text: "Debes seleccionar una imagen",
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }
    let nuevoPaciente = {
      contacto,
      nombre,
      imagen,
      padecimiento,
    };
    setPacientes([nuevoPaciente, ...pacientes]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Se registro el paciente",
      showConfirmButton: false,
      timer: 1000,
    });
    setContacto("");
    setNombre("");
    setPadecimiento("");
    setImagen(null);
  };

  return (
    <form
      className=" col-11 col-md-5 shadow p-5 ms-3 mb-3 border border-secondary pt-4 "
      onSubmit={agregarPaciente}
      style={{ maxWidth: "600px" }}
    >
      <h2 className="col-12 text-center mb-5">Registro</h2>
      <div className="input-group mb-3 ">
        <span
          className="input-group-text bg-transparent border border-primary"
          id="basic-addon1"
        >
          <i className="bi bi-bug-fill text-primary"></i>
        </span>
        <input
          required
          type="text"
          className="form-control bg-transparent border border-primary"
          placeholder="Nombre de la mascota"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text bg-transparent border border-primary"
          id="basic-addon1"
        >
          <i className="bi bi-telephone  text-primary "></i>
        </span>
        <input
          required
          type="number"
          className="form-control border border-primary "
          placeholder="Contacto"
          value={contacto}
          onChange={(e) => setContacto(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="formFile" className="form-label">
          Agrega una foto de tu mascota
        </label>
        <input
          required
          accept="image/*"
          className="form-control border border-primary"
          type="file"
          id="formFile"
          onChange={(e) => setImagen(e.target.files[0])}
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text bg-transparent border border-primary"
          id="basic-addon1"
        >
          <i className="bi bi-clipboard2-pulse text-primary "></i>
        </span>
        <input
          required
          type="text"
          value={padecimiento}
          className="form-control border border-primary"
          placeholder="Padecimiento"
          onChange={(e) => setPadecimiento(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-end mt-5">
        <button className="btn btn-primary mt-5">
          {" "}
          <i class="bi bi-arrow-right-short fs-5 m-0 p-0"> Registrar</i>{" "}
        </button>
      </div>
    </form>
  );
};

export default Formulario;
