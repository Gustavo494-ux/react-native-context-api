import { createContext, useEffect, useState } from 'react'
import { claro, escuro } from '../estilosGlobais'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const TemaContext = createContext({})

export function TemaProvider( {children} ) {
  const [temaAtual, setTemaAtual] = useState('escuro')

  const temas = {
    'escuro': escuro,
    'claro': claro
    }
  

    useEffect(() => {
      async function recuperarTemaAtual(){
        const temaSalvo =  await AsyncStorage.getItem('@tema');
        if(temaSalvo){
          setTemaAtual(temaSalvo);
          return
        }
        return
      }
      recuperarTemaAtual();
    },[])
    
    

    async function salvarTemaNoDispositivo(tema){
      await AsyncStorage.setItem('@tema',tema)
      setTemaAtual(tema)
    }


  return (
    <TemaContext.Provider value={{
        temaAtual,
        setTemaAtual,
        temaEscolhido: temas[temaAtual],
        salvarTemaNoDispositivo
    }}>
      {children}
    </TemaContext.Provider>
  )
}