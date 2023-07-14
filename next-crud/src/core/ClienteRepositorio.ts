import { Observable } from 'rxjs';
import Cliente from "./Cliente";

export default interface ClienteRepositorio {
  salvar(cliente: Cliente): Promise<Cliente>;
  excluir(cliente: Cliente): Promise<void> | void;
  obterTodos(): Promise<Cliente[]>;
}