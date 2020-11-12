import Mestre from './Mestre';

export default class Campanha {
  constructor(
    public titulo: string,
    public descricao: string,
    public mestre?: Mestre,
    public id?: number,
    public notas?: string) {
  }
}
