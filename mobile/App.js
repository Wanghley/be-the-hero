import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes/>
  );
}




/* EXEMPLOS de USO
// div, span, p, h1 -> Usado na Web

export default function App() {
  return (
    /* A tag view substitui a div, header, footer, containers, section
    <View style={styles.container}> 
      <Text style={styles.title}>Hello Omnistack!</Text>
    </View>
    /* Tag text substitui textos num geral: p,h1,h2... */
    /* Sem semântica, significado maior dentro da página, 
              Todo text é text
  );
}
/* style recebe objeto com a estilização do que seja necessário
            Stylesheet usado para criar o estilos
//Estilização ocorre por elemento e não por 'herança'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: '#fff',
    fontSize: 30,
  },
});*/