import React, { Component } from "react"; //importando o React e o Component
import CardNota from "../CardNota/CardNota";
import "./style.css";
class ListaDeNotas extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
       //cada item da lista deve ter uma chave única key
      <ul className="lista-notas">
        {/* adicionando  javascript dentro do jsx*/}
        {this.props.notas.map((notas, index) => {//uma função que retorna uma lista de li
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={notas.titulo} texto={notas.texto}/>
            </li>
          );
          })
        }
      </ul>
    );
  }
}

export default ListaDeNotas;
