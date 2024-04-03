import {api} from '../api';

export async function salvarProduto(produto){
    try {
        const resultado = await api.post('/produtos', produto)
        return resultado.data
    } catch (error) {
        console.log(err)
        return {}
    }
}

export async function buscarProdutos(){
    try {        
        const resultado = await api.get('/produtos')
        console.log(resultado)
        return resultado.data
    } catch (error) {
        console.log(error)
        return []
    }
}