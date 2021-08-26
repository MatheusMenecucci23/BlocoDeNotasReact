import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro.jsx';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas.jsx';
import "./assets/App.css"
import "./assets/index.css"
import { render } from '@testing-library/react';
class App extends Component {//minha aplicação principal

  constructor(){
    super()
    this.state ={//estado inicial
      notas:[]
    }
  }


  criarNota1(titulo,texto){
    const novaNota = {titulo, texto}
    //alterando o estado
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  //aplicação chamará o render de cada component
  render(){
    return (
      <section className="conteudo"> 
      {/* /criarNota vai passar os parametros para o criarNota1/ */}
        <FormularioCadastro criarNota={this.criarNota1.bind(this)}></FormularioCadastro>
        <ListaDeNotas notas={this.state.notas}></ListaDeNotas>
      </section>
    );
  }
}

export default App;
