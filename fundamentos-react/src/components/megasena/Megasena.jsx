import { useState } from "react";
import './Megasena.css'

export default function Megasena(props) {

  const quantidadeNumeros = props.quantidade || 6
  const [quantidade, setQuantidade] = useState(quantidadeNumeros);
  const [numeros, setNumeros] = useState(Array(quantidade).fill(0));

  const alterarQuantidade = (valor) => {
    setQuantidade(valor);
  }

  const gerarNumeroNaoContido = (min, max, array) => {
    const randomNumber = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(randomNumber) ? gerarNumeroNaoContido(min, max, array) : randomNumber
  }

  const gerarNumeros = (quantidade) => {
    const numeros = Array(quantidade)
      .fill(0)
      .reduce((nums) => [...nums, gerarNumeroNaoContido(1, 60, nums)], [])
      .sort((n1, n2) => n1 - n2);
    return numeros;
  }

  return (
    <div className="Megasena">
      <h3>{numeros.join(', ')}</h3>
      <button onClick={() => setNumeros(gerarNumeros(quantidade))} >Gerar Números</button>
      <div>
        <label>Quantidade de Números</label><br />
        <input type="number" value={quantidade} onChange={(e) => alterarQuantidade(+e.target.value)} />
      </div>
    </div>
  );
}