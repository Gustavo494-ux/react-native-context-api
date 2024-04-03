import { createContext, useEffect, useState } from 'react'
import { buscarProdutos, salvarProduto } from '../services/requisicoes/produtos'

export const ProdutosContext = createContext({})

export function ProdutosProvider( {children} ) {
    const [quantidade, setQuantidade] = useState(0)
    const [carrinho, setCarrinho] = useState([])
    const [ultimosVistos, setUltimosVistos] = useState([])
    const [precoTotal, setPrecoTotal] = useState(0);

    useEffect(  () =>{
      async function carregarProdutos(){
        const resultado = await buscarProdutos()
        setCarrinho(resultado)
        setQuantidade(resultado.length)
        return
      }
      carregarProdutos();
      
    },[])

    async function viuProduto(produto){
      const resultado = await salvarProduto(produto);
      const novoItemCarinho = [...carrinho, resultado];
      setCarrinho(novoItemCarinho);
      
      let novoUltimosVistos = new Set(ultimosVistos);
      novoUltimosVistos.add(produto);
      setUltimosVistos([...novoUltimosVistos]);

      setQuantidade(quantidade + 1);
      let novoPrecoTotal = precoTotal + produto.preco;
      setPrecoTotal(novoPrecoTotal);
    }

  return (
    <ProdutosContext.Provider value={{
      quantidade, 
      carrinho,      
      ultimosVistos,
      precoTotal,
      viuProduto,
      setCarrinho,
    }}>
      {children}
    </ProdutosContext.Provider>
  )
}