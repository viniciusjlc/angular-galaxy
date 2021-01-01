import Especialidade from './Especialidade';

export default class Classe {
  constructor(
    public nome: string,
    public descricao: string,
    public listaEspecialidades?: Especialidade[],
    public id?: number) {
  }
}
