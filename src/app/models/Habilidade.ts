export default class Habilidade {
  constructor(
    public id: number,
    public nome: string,
    public descricao: string,
    public tipo: string,
    public levelNecessario?: number
  ) {
  }
}
