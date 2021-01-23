import Raca from './Raca';
import TipoCor from './TipoCor';
import Campanha from './Campanha';
import Classe from './Classe';
import Atributo from './Atributo';
import PersonagemPontos from './PersonagemPontos';

export default class Personagem {
  constructor(public nome: string,
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
              public id?: number,
              public pontos?: PersonagemPontos) {
  }
}
