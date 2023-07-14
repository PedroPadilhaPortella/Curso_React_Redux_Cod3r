import { useState } from 'react';
import Entrada from './Entrada';
import Cliente from '../core/Cliente';
import Botao from './Botao';

interface FormularioProps {
  cliente?: Cliente
  onCancel?: () => void
  onSave?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {

  const id = props.cliente?.id ?? null
  const [nome, setNome] = useState(props.cliente?.nome ?? '');
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? <Entrada texto='Código' tipo='text' valor={id} className='mb-4' somenteLeitura={true} /> : ''}
      <Entrada 
        texto='Nome' tipo='text' className='mb-4'
        valor={nome} somenteLeitura={false} onChange={(e) => setNome(e)} 
      />
      <Entrada 
        texto='Idade' tipo='number' 
        valor={idade} somenteLeitura={false} onChange={(e) => setIdade(e)} 
      />

      <div className='mt-7 flex justify-end'>
        <Botao cor='blue' className='mr-2' onClick={() => props.onSave?.(new Cliente(nome, idade, id))} >{id? 'Alterar': 'Salvar'}</Botao>
        <Botao cor='gray' onClick={props.onCancel}>Cancelar</Botao>
      </div>
    </div>
  );
}