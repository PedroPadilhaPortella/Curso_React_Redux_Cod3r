export default function IndiretaFilho(props) {

  const min = 30
  const max = 70

  const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
  

  return (
    <div>
      <button onClick={() => props.quandoClicar('Rogério', gerarIdade())}>Fornecer informações do Pai</button>
    </div>
  );
}