import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro.jsx';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas.jsx';
import "./assets/App.css"
import "./assets/index.css"
class App extends Component {//minha aplicação principal
  //aplicação chamará o render de cada component
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro></FormularioCadastro>
        <ListaDeNotas></ListaDeNotas>
      </section>
    );
  }
}

export default App;
