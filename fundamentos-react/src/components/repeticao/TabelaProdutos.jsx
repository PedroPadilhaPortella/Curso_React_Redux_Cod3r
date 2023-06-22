import { produtos } from '../../data/data';
import './TabelaProdutos.css'

export default function TabelaProdutos(props) {

  return (
    <div className='TabelaProdutos'>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {
            produtos.map((produto, i) => {
              return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>R$ {produto.preco.toFixed(2)}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}