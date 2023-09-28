import "./App.css";
import Pantalla from "./components/pantalla.jsx";
import Boton from "./components/boton.jsx";
import BotonIgual from "./components/boton-igual.jsx";
import BotonClear from "./components/boton-clear.jsx";
import Footer from "./components/footer.jsx";
import Modal from "./components/modal.jsx";
import { useState, useEffect, useCallback } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const agregarInput = useCallback((valor) => {
    setInput((prevInput) => prevInput + valor);
  }, []);

  const calcularResultado = useCallback(() => {
    const resultado = evaluate(input);
    if (input) {
      if (resultado === Infinity || resultado === -Infinity) {
        alert("No se puede dividir entre 0");
      } else {
        setInput(resultado.toString());
      }
    } else {
      alert("Por favor ingrese un valor");
    }

    if (resultado === 3535) {
      setModalVisible(true);
    }
  }, [input]);

  // Capturar las pulsaciones de teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (/[0-9+\-*/.=]/.test(key)) {
        // Permitir números y operadores válidos
        agregarInput(key);
      } else if (key === "Backspace") {
        // Si la tecla es "Backspace", eliminar el último carácter
        setInput((prevInput) => prevInput.slice(0, -1));
      } else if (key === "Enter") {
        // Si la tecla es "Enter", calcula la pantalla
        calcularResultado();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input, agregarInput, calcularResultado]);

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div className="calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <BotonIgual manejarClick={calcularResultado}>=</BotonIgual>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClick={() => setInput("")}>Borrar</BotonClear>
        </div>
      </div>
      <Footer />
      {modalVisible && <Modal clickManager={cerrarModal} />}
    </div>
  );
}

export default App;
