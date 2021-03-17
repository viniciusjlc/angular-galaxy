import Raca from './Raca';
import TipoCor from './TipoCor';
import Campanha from './Campanha';
import Classe from './Classe';
import Atributo from './Atributo';
import PersonagemPontos from './PersonagemPontos';
import Especialidade from './Especialidade';
import Habilidade from './Habilidade';

export default class Personagem {
  constructor(public nome: string,
              public apelido: string,
              public raca: Raca,
              public classe: Classe,
              public sexo: string,
              public idade: number,
              public altura: number,
              public peso: number,
              public pele: TipoCor,
              public cabelo: TipoCor,
              public olho: TipoCor,
              public usuario: number,
              public campanha: Campanha,
              public listaAtributos?: Atributo[],
              public listaEspecialidades?: Especialidade[],
              public id?: number,
              public pontos?: PersonagemPontos,
              public listaHabilidade?: Habilidade[]) {
  }
}
