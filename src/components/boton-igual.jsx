import React from "react";
import "../css/styles.css";

const BotonIgual = ({ manejarClick, children }) => (
        <button className="boton-igual" onClick={manejarClick}>
            {children}
        </button>
)

export default BotonIgual;