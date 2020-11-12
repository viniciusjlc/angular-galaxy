import Personagem from './Personagem';
import Campanha from './Campanha';

export  class Usuario {
  constructor(
    public email: string,
    public nome: string,
    public senha?: string,
    public id?: number,
    public ativo?: boolean,
    public moderador?: boolean,
    public listaPersonagens?: Personagem[],
    public listaCampanahs?: Campanha[]) {
  }
}
