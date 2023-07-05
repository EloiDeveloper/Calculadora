import React from "react";
import "../css/styles.css";

const BotonClear = ({ children, manejarClick }) => (
    <button className="boton-clear"
     onClick={manejarClick}>
    {children}
    </button>
);

export default BotonClear;