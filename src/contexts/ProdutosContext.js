import { createContext, useEffect, useState } from 'react'
//import { buscarProdutos, salvarProduto } from '../services/requisicoes/produtos'

export const ProdutosContext = createContext({})

export function ProdutosProvider( {children} ) {
    const [quantidade, setQuantidade] = useState(0)
    const [carrinho, setCarrinho] = useState([])
    const [ultimosVistos, setUltimosVistos] = useState([])

    // useEffect(  () =>{
    //   async function carregarProdutos(){
    //     console.log('1')
    //     const resultado = await buscarProdutos()
    //     console.log('2')
    //     setCarrinho(resultado)
    //     setQuantidade(resultado.lenght)
    //     return
    //   }
    //    carregarProdutos();
    //   return
    // },[])

    async function viuProduto(produto){
        setQuantidade(quantidade+1)

        // const resultado = await salvarProduto(produto);

        let novoCarrinho = resultado
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