export default function DiretaFilho(props) {

  return (
    <div>
      <p>{props.texto} - {props.numero} - {props.bool ? "Verdadeiro" : "Falso"}</p>
    </div>
  );
}