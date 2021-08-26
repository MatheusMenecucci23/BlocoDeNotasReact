import React, { Component } from "react"; //importando o React e o Component
import CardNota from "../CardNota/CardNota";
import "./style.css";
class ListaDeNotas extends Component {
  render() {
    return (
       //cada item da lista deve ter uma chave única key
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {//uma função que retorna uma lista de li
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
