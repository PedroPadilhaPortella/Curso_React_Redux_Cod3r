export default function ParOuImpar(props) {

  const isPar = props.numero % 2 === 0;

  return (
    <div>
      { props.numero } : { isPar ? <span>Par</span> : <span>Impar</span>}
    </div>
  );
}