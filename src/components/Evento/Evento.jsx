import "./style.css";

export default function Evento(props) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.fecha}</p>
      <p>{props.ubicacion}</p>
    </div>
  );
}
