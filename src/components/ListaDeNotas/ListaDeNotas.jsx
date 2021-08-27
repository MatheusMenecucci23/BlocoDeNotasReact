import React, { Component } from "react"; //importando o React e o Component
import CardNota from "../CardNota/CardNota";
import "./style.css";
class ListaDeNotas extends Component {
  //esse bloco nesse caso já  está sendo executado pelo react, sendo assim não precisamos excuta-lo novamente
  //constructor(props){
  //   super(props);
  //}
  render() {
    return (
       //cada item da lista deve ter uma chave única key
      <ul className="lista-notas">
        {/* adicionando  javascript dentro do jsx*/}
        {this.props.notas1.map((notas1, index) => {//uma função que retorna uma lista de li
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={notas1.titulo} texto={notas1.texto}/>
            </li>
          );
          })
        }
      </ul>
    );
  }
}

export default ListaDeNotas;
