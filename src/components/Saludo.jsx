import { Link } from "react-router-dom";

function Saludo(props) {
  console.log(props);
  return (
    <div>
      <p>Hola estoy me llamo props.nombre</p>
    </div>
  );
}
export default Saludo;
