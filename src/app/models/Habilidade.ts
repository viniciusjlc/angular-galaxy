import HabilidadeRequisito from './HabilidadeRequisito';
import Classe from './Classe';

export default class Habilidade {
  constructor(
    public id: number,
    public nome: string,
    public descricao: string,
    public tipo: string,
    public levelNecessario?: number,
    public classe?: Classe,
    public habilidadesRequisitos?: HabilidadeRequisito[]
  ) {
  }
}
