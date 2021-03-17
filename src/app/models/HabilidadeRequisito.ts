import Atributo from './Atributo';
import Especialidade from './Especialidade';

export default class HabilidadeRequisito {
  constructor(public valor: number,
              public atributo?: Atributo,
              public especialidades?: Especialidade,
              public id?: number) {
  }
}
