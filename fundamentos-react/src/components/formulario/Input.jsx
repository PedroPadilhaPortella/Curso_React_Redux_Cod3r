import { useState } from "react";
import './Input.css';

export default function Input(props) {

  const [valor, setValor] = useState('Inicial');

  const fillInput = (e) => setValor(e.target.value)

  return (
    <div>
      <input className="Input" value={valor} onChange={fillInput} />
    </div>
  );
}