import Saludo from "./components/Saludo";
import { useState, useEffect } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [valor, setValor] = useState("");
  const [activado, setActivado] = useState(false);

  function sumar() {
    setContador(contador + 1);
  }

  function nuevoNombre(e) {
    console.log("estas son las propiedades de e (del evento)", e);
    setValor(e.target.value);
  }

  return (
    <>
      <p>contador {contador}</p>
      <button onClick={sumar}>incrementar</button>
      <br />
      <br />
      <input
        type='text'
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder='escriba algo..'
      />
      <p>lo que escribimos...{valor}</p>
      <br />
      <br />
      <br />
      <p>el boton esta {activado ? "Activado" : "Desactivado"}</p>
      <button onClick={() => setActivado(!activado)}>
        {activado ? "Desactivar" : "Activar"}
      </button>
    </>
  );
}

export default App;
