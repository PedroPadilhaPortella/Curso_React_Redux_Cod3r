import { alunos } from '../../data/data';

export default function ListaAlunos(props) {

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {
          alunos.map((aluno) => {
            return (
              <li key={aluno.id}>
                ({aluno.id}) {aluno.nome} -- {aluno.nota}
              </li>)
          })
        }
      </ul>
    </div>
  );
}