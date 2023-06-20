export default function Aleatorio({ max, min }) {

  const numeroAleatorio = () => parseInt(Math.random() * (max - min + 1) + min);

  return (
    <h2>O numero aleatorio gerado entre {min + 1} e {max} foi {numeroAleatorio()}</h2>
  );
}