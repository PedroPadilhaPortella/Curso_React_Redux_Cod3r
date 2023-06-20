import Primeiro from './components/basicos/Primeiro';
import ComParametros from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import './App.css'

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
      </div>
    </div>
  );
}