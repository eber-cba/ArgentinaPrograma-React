function Saludo(props) {
  console.log(props);
  return (
    <div>
      {" "}
      <p>
        hola me llamo {props.nombre} {props.apellido} y tengo {props.edad} años
      </p>
    </div>
  );
}
export default Saludo;
