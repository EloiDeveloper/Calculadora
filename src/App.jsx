import "./App.css";
import Pantalla from "./components/pantalla.jsx";
import Boton from "./components/boton.jsx";
import BotonIgual from "./components/boton-igual.jsx";
import BotonClear from "./components/boton-clear.jsx";
import Footer from "./components/footer.jsx";
import Modal from "./components/modal.jsx";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
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
  };

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
