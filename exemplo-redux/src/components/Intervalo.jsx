import './Intervalo.css';
import Card from './Card'

export default function Intervalo(props) {
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={0} readOnly />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={0} readOnly />
        </span>
      </div>
    </Card>
  );
}