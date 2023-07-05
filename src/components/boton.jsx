import React from "react";
import "../css/styles.css";

function Boton({ children, manejarClick }) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== ".") && (valor !== "=");
    };

    if (esOperador(children)) {
        return(
            <button
                className="boton operador"
                onClick={() => manejarClick(children)}>
                  {children}
            </button>
        );
    } else {
        return(
            <button
                className="boton"
                onClick={() => manejarClick(children)}>
                  {children}
            </button>
        );
    }
};

export default Boton;