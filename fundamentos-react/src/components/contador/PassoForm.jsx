export default function PassoForm(props) {

  return (
    <div>
      <label style={{ marginRight: '0.8rem' }} htmlFor='passoInput'>Passo</label>
      <input
        style={{ fontSize: '1.4rem' }}
        type="number"
        id='passoInput'
        value={props.passo}
        onChange={(e) => props.setStep(+e.target.value)}
      />
    </div>
  );
}