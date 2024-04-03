import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { estilos } from './estilos';
import { useContext, useState } from 'react';
import { TemaContext } from "../../contexts/TemaContext";
import { ProdutosContext } from '../../contexts/ProdutosContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';

export default function Finalizar({navigation}) {
  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido);

  const {setCarrinho,quantidade,
    precoTotal} = useContext(ProdutosContext)
  const {usuario} = useContext(AutenticacaoContext)


  
  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.enderecoArea}>
        <Text style={estilo.titulo}>Informações de entrega</Text>
        <Text style={estilo.texto}>Nome: {usuario.nome}</Text>
        <Text style={estilo.texto}>Endereço: {usuario.endereco}</Text>
        <Text style={estilo.texto}>Email: {usuario.email}</Text>
        <Text style={estilo.texto}>Telefone: {usuario.telefone}</Text>
      </View>
      <View style={estilo.resumoArea}>
        <Text style={estilo.texto}>Quantidade: {quantidade}</Text>
        <Text style={estilo.texto}>Preço Total: R$ {precoTotal}</Text>
      </View>
      <TouchableOpacity style={estilo.botao} onPress={() => {
          setCarrinho([]);
          navigation.navigate('Principal');
        }}>      
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}