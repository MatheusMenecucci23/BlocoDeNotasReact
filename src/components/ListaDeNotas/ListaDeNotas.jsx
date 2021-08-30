import React, { Component } from "react"; //importando o React e o Component
import CardNota from "../CardNota/CardNota";
import "./style.css";
class ListaDeNotas extends Component {
  //esse bloco nesse caso já  está sendo executado pelo react, sendo assim não precisamos excuta-lo novamente
  constructor(){
     super();
     this.state = {notas:[]}
     this._novasNotas = this._novasNotas.bind(this);
  }
  componentDidMount(){
    this.props.notas1.inscrever(this._novasNotas)
  }
  componentWillUnmount(){
    this.props.notas.desincrever(this._novasNotas)
  }
  
  _novasNotas(notas){
    this.setState({...this.state,notas})
  }
  render() {
    return (
       //cada item da lista deve ter uma chave única key
      <ul className="lista-notas">
        {/* adicionando  javascript dentro do jsx*/}
        {this.state.notas.map((notas1, index) => {//uma função que retorna uma lista de li
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota 
              indice={index}
              categoria={notas1.categoria}
              titulo={notas1.titulo} 
              texto={notas1.texto}
              apagarNota1={this.props.apagarNota}/>
            </li>
          );
          })
        }
      </ul>
    );
  }
}

export default ListaDeNotas;
