import React from "react";
import "../css/styles.css";

const Modal = ({ clickManager }) => {
  return (
    <section className="modal modal--show">
      <div className="modal-container">
        <h1 className="modal-titulo">Eloi35</h1>
        <p className="modal-txt-contenido">
          Este es uno de mis primeros proyectos hechos en React, es una
          calculadora simple pero funcional. Esta calculadora está hecha con la
          ayuda de Mathjs.
        </p>
        <p className="modal-txt-contenido">
            Eloi 2023
        </p>
        <button className="modal-cerrar" onClick={clickManager}>
          Cerrar
        </button>
      </div>
    </section>
  );
};

export default Modal;
