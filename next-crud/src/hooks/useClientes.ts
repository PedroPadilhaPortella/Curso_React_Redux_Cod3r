import { useEffect, useState } from "react";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import FirebaseClienteColecao from "../firebase/FirebaseClienteColecao";
import useVisibilidade from "./useVisibilidade";

export default function useClientes() {

  const repository: ClienteRepositorio = new FirebaseClienteColecao();

  const { exibirFormulario, exibirTabela, tabelaEstaVisivel } = useVisibilidade()
  const [cliente, setCliente] = useState<Cliente>(Cliente.generateEmptyClient());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterTodos, [])

  function obterTodos() {
    repository.obterTodos().then((clientes) => {
      console.warn(clientes)
      setClientes(clientes)
      exibirTabela()
    })
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }

  async function excluirCliente(cliente: Cliente) {
    await repository.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    await repository.salvar(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.generateEmptyClient())
    exibirFormulario()
  }

  return {
    cliente,
    clientes,
    obterTodos,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    exibirTabela, 
    tabelaEstaVisivel
  }
}