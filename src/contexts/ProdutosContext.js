import { createContext, useState } from 'react'

export const ProdutosContext = createContext({})

export function ProdutosProvider( {children} ) {
    const [quantidade, setQuantidade] = useState(0)
    const [carrinho, setCarrinho] = useState([])
    const [ultimosVistos, setUltimosVistos] = useState([])

    function viuProduto(produto){
        setQuantidade(quantidade+1)

        let novoCarrinho = carrinho
        novoCarrinho.push(produto)

        setCarrinho(novoCarrinho)

        /* O set verifica se o item(neste caso produto) a ser adicionado 
            no array já existe no mesmo, caso exista não será adicionado 
            novamente */

        let novoUltimosVistos = new Set(ultimosVistos)
        novoUltimosVistos.add(produto)
        setUltimosVistos([...novoUltimosVistos])
    }

  return (
    <ProdutosContext.Provider value={{
      quantidade, 
      carrinho,      
      ultimosVistos,
      viuProduto,
      setCarrinho,
    }}>
      {children}
    </ProdutosContext.Provider>
  )
}