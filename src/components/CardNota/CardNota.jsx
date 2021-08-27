import React, { Component } from "react";
import "./style.css";//linkando csss
class CardNota extends Component {

  //esse bloco nesse caso já  está sendo executado pelo react, sendo assim não precisamos excuta-lo novamente
  //constructor(props){
  //   super(props);
  //}
  
  render() {
    //className = "class CSS"
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;