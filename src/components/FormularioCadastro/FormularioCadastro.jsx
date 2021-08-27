import React, { Component } from "react"; //importando o Component
import "./style.css";
class FormularioCadastro extends Component {
  constructor(props) {
    //inicializando variáveis
    //props: é uma propriedade criarNota2 passada pelo app.js
    super(props); //sempre chamar essa classe
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria"
  }
  __handleMudancaCategoria(evento){
    evento.stopPropagation()
    this.categoria = evento.target.value
  }
  
  _handleMudancaTitulo(evento) {//criando uma função que pega o evento onChange
    this.titulo = evento.target.value;//titulo recebe o que é digitado no input
    evento.stopPropagation()
  }


  _handleMudancaTexto(evento){
    this.texto = evento.target.value;//nota recebe o que é digitado no textarea
    evento.stopPropagation()
  }


  _criarNota(evento){//quando o subimit for dados, essa funtion será criada
    evento.preventDefault();//removendo o comportamento padrão
    evento.stopPropagation()
    this.props.criarNota2(this.titulo,this.texto,this.categoria)//pega o que foi passado pelo na {} app.js e modifica
  }

  render() {
    return (
      <form className="form-cadastro " onSubmit={this._criarNota.bind(this)}>
        <select 
        onChange={this.__handleMudancaCategoria.bind(this)}
        className="form-cadastro_input" >
          <option>Sem categoria</option>
        {this.props.categorias.map((categorias12) =>{
             return  <option>{categorias12}</option>
         })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)} //a cada mudança no campo, chame a função {funtion}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit" type="submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
