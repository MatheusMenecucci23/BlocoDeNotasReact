export default class ArrayNotas{
    constructor(){
        this.notas = []
        //observable
        this._inscritos = []
    }
    adicionarNota1(titulo,texto,categoria) {
        const novaNota = new Nota(titulo,texto,categoria)
        this.notas.push(novaNota)
        this.notificar();
    }
    deletarNotas(indice){
        this.notas.splice(indice, 1);
        this.notificar();
    }
//observable
    inscrever(func){
        this._inscritos.push(func)
    }
  
    notificar(){
        this._inscritos.forEach(func => {
            func(this.notas)
          });
    }
    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f!== func)
      }
}

class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria;
    }
}