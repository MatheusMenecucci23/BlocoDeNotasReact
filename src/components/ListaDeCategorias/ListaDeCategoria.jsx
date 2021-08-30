import React, { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {
  //OnKeyUp = stá passando o evento para a função _handleEventoInput
  constructor(){
    super();
    this.state = {categorias:[]}
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias){
    this.setState({...this.state,categorias})
    console.log(categorias)
  }

  _handleEventoInput(evento) {
    if (evento.key == "Enter") {
      console.log("adicionar categoria");
      let valorCategoria = evento.target.value
      this.props.adicionarCategoria(valorCategoria)
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
         {this.state.categorias.map((categorias1,index) =>{
             return  <li key={index} className="lista-categorias_item">{categorias1}</li>
         })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        ></input>
      </section>
    );
  }
}

export default ListaDeCategorias;
