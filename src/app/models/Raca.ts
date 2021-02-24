import Classe from './Classe';
import Atributo from './Atributo';
import TipoCor from './TipoCor';

export default class Raca {
  constructor(
    public nome: string,
    public descricao: string,
    public nomePlaneta: string,
    public listaClasse?: Classe[],
    public listaPele?: TipoCor[],
    public listaCabelo?: TipoCor[],
    public listaOlho?: TipoCor[],
    public listaAtributos?: Atributo[],
    public id?: number,
    public imagem?,
    public imagemRosto?,
    public idadeMax?: number,
    public alturaMin?: number,
    public alturaMax?: number,
    public pesoMin?: number,
    public pesoMax?: number) {
  }
}
