import './App.css';
import Aleatorio from './components/basicos/Aleatorio';
import ComParametros from './components/basicos/ComParametros';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Fragmento from './components/basicos/Fragmento';
import Primeiro from './components/basicos/Primeiro';
import Card from './components/layout/Card';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';

export default function App() {
  return (
    <div className='App'>

      <div className='Cards'>
        <Card title="Aprendendo React na Cod3r: Primeiro Componente" color="#080">
          <Primeiro />
        </Card>

        <Card title="Aprendendo React na Cod3r: Passsagem de parametros" color="#00f">
          <ComParametros titulo="Segundo Componente" subtitulo="Passsando parametros para os Componentes" />
        </Card>

        <Card title="Aprendendo React na Cod3r: Fragment" color="#990">
          <Fragmento>
            <h2>Conteudo do Fragmento</h2>
          </Fragmento>
        </Card>

        <Card title="Aprendendo React na Cod3r: Número Aleatório">
          <Aleatorio max={10} min={0} />
        </Card>

        <Card title="Aprendendo React na Cod3r: Componente com Filhos" color="#055">
          <Familia sobrenome="Portella">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Samuel" />
            <FamiliaMembro nome="Daniel" />
          </Familia>
        </Card>

        <Card title="Aprendendo React na Cod3r: Lista de Alunos" color="#050">
            <ListaAlunos />
        </Card>

        <Card title="Aprendendo React na Cod3r: Tabela de Produtos" color="#c30">
            <TabelaProdutos />
        </Card>
      </div>
    </div>
  );
}