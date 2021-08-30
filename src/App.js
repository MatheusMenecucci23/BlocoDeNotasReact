import React, { Component } from "react";
import ListaDeCategorias from "./components/ListaDeCategorias/index.js";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas.jsx";
import "./assets/App.css";
import "./assets/index.css";
import { render } from "@testing-library/react";
import Categorias from "./dados/categorias.js";
import ArrayNotas from "./dados/notas.js";
class App extends Component {
  //minha aplicação principal

  constructor() {
       super();
       this.categorias = new Categorias();
       this.notas = new ArrayNotas()
  //   this.state = {
  //     //estado inicial
  //    // notas2: [], //array de notas que é exibido
  //     //categorias:[]
  //   };
  }

  // criarNota1(titulo, texto, categoria) {
  //   const novaNota = { titulo, texto, categoria };

  //   //pegando o estado anterior e associando/adicionando uma novaNota
  //   const novoArrayNotas = [...this.state.notas2, novaNota]; //toda vez que essa linha for executada, ela vai pegar esse parametros a passar para dentro do array juntando com os valores antigos

  //   //alterando o estado
  //   this.setState({
  //     notas2: novoArrayNotas,
  //   });
  // }

  // deletarNota(index) {
  //   let ArrayNotas = this.state.notas2;
  //   ArrayNotas.splice(index, 1);
  //   this.setState({ notas2: ArrayNotas });
  //   console.log("deletar");
  // }

  // adicionarCategoria(nomeCategoria){
  //   //adiciona no novoArrayCategoria as categorias antigas + nomeCategoria
  //   let novoArrayCategoria = [...this.state.categorias, nomeCategoria]
  //   const novoEstado = {...this.state, categorias: novoArrayCategoria}
  //   //mudando o estado da categoria
  //   this.setState(novoEstado)
  // }

  //aplicação chamará o render de cada component
  render() {
    return (
      <section className="conteudo">
        {/* /criarNota2 vai receber a função criarNota1 e lá no FormularioCadastro, o criarNota2 vai modificar os parametro de criarNota1/ */}
        <FormularioCadastro
          criarNota2={this.notas.adicionarNota1.bind(this.notas)}
          categorias={this.categorias}
        ></FormularioCadastro>
        <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          categorias={this.categorias} ></ListaDeCategorias>
          <ListaDeNotas
            apagarNota={this.notas.deletarNotas.bind(this.notas)}
            notas1={this.notas}
          ></ListaDeNotas>
        </main>
      </section>
    );
  }
}

export default App;
