import './Home.css'
import { useParams } from 'react-router-dom';

export default function Param() {

  const { id } = useParams()

  return (
    <div className='Param'>
      Componente Param com id = {id}
    </div>
  );
}