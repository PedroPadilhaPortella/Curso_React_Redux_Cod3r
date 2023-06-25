

export default function Display(props) {

  const style = {
    fontSize: '1.6rem',
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'whitesmoke',
    margin: '0 0.3rem',
  }

  return (
    <div>
      <button style={style} onClick={() => props.decrementar()}>-</button>
      <button style={style} onClick={() => props.incrementar()}>+</button>
    </div>
  );
}