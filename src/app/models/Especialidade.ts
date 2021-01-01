import Atributo from './Atributo';

export default class Especialidade {
  constructor(
    public nome: number,
    public descricao: string,
    public atributo: Atributo,
    public valor?: number,
    public id?: number) {
  }
}
