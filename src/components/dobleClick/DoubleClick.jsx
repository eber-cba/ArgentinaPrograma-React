export default function DoubleClick(props) {
  console.log("props de componente doubleclick", props);
  return (
    <div>
      <button onDoubleClick={props.fn}>haz doble click</button>
      <h1>hola tengo {props.edad}</h1>
    </div>
  );
}
