import Personagem from './Personagem';
import Campanha from './Campanha';

export class Planeta {
  constructor(
    public nome: string,
    public descricao: string,
    public zonaGalatica: string,
    public imagem?,
    public id?: number) {
  }
}
