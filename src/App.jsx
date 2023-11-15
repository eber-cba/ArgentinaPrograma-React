import Evento from "./components/Evento/Evento";
import Saludo from "./components/Saludo";
import Tarea from "./components/Tarea";
import DoubleClick from "./components/dobleClick/DoubleClick";

function App() {
  function handleClick() {
    alert("haz hecho click");
  }

  function handleChange(event) {
    console.log("event =>", event);
    console.log("texto cambiado", event.target.value);
  }

  function handleClickDelete(id) {
    console.log("eliminar el elemento con el id", id);
  }

  function handleDoubleClick() {
    console.log("haz hecho doble click");
  }
  function handleFocus() {
    console.log("foco en input");
  }
  function handleBluer() {
    console.log("se ha perdido el foco");
  }
  function onkei(event) {
    console.log("onkeypress =>", event.key);
  }
  function prevenir(event) {
    event.preventDefault();
    console.log("cliclo prevenido");
  }

  return (
    <>
      {/* Eventos */}
      <br />

      <input
        onKeyUp={onkei}
        type='text'
        onFocus={handleFocus}
        onBlur={handleBluer}
      />
      <br />
      <br />

      <button
        onClick={() => {
          handleClickDelete(2);
        }}
      >
        Eliminar
      </button>
      <a href='https://www.youtube.com/' onClick={prevenir}>
        youtube
      </a>
      <button onClick={handleClick}> has click</button>

      <input type='text' onChange={handleChange} />
      <DoubleClick edad='28' fn={handleDoubleClick} />
      {/* Props */}
      <h1 onClick={handleClick}>hola mundo</h1>
      <Saludo nombre='Franscisco' apellido='Ribe' edad='23' />
      <h1> Lista de Tareas</h1>
      <ul>
        <Tarea nombre='hacer las compras' />
        <Tarea nombre='lavar la ropa' />
        <Tarea nombre='Descansar' />
      </ul>
      <h1 onDoubleClick={handleDoubleClick}>Eventos proximos</h1>
      <Evento
        titulo='Reunion de Equipo 1'
        fecha='22-4-2022'
        ubicacion='cordoba'
      />
      <Evento
        titulo='Reunion de Equipo 2'
        fecha='22-4-2022'
        ubicacion='buenos aires'
      />
      <Evento
        titulo='Reunion de Equipo 3'
        fecha='22-4-2022'
        ubicacion='salta'
      />
    </>
  );
}

export default App;
