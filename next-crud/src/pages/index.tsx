import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/useClientes'
import useVisibilidade from '../hooks/useVisibilidade'

export default function Home() {

  const {
    cliente, clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    exibirTabela, tabelaEstaVisivel
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout title='Cadastro Simples'>
        {tabelaEstaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao className='mb-4' cor='green' onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            onCancel={exibirTabela}
            onSave={salvarCliente}
          />
        )}
      </Layout>

      <details>
        <summary></summary>
      </details>
    </div>
  )
}
