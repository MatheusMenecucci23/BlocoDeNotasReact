
import React, { Component } from "react";
import "./style.css";//linkando css
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"//desse jeito o SVG vira um component
class CardNota extends Component {

  //esse bloco nesse caso já  está sendo executado pelo react, sendo assim não precisamos excuta-lo novamente
  //constructor(props){
  //   super(props);
  //}
  apagar(){
    const indice = this.props.indice
    this.props.apagarNota1(indice);
  }
  render() {
    //className = "class CSS"
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}></DeleteSVG>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;