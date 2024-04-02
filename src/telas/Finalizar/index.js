import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { estilos } from './estilos';
import { useContext } from 'react';
import { TemaContext } from "../../contexts/TemaContext";
import { ProdutosContext } from '../../contexts/ProdutosContext';

export default function Finalizar({navigation}) {
  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido);

  const {setCarrinho} = useContext(ProdutosContext)

  return (
    <View style={estilo.container}>
      <StatusBar />
      <TouchableOpacity style={estilo.botao} onPress={() => {
          setCarrinho([]);
          navigation.navigate('Principal');
        }}>
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}