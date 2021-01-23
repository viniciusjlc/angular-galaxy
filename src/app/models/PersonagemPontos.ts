import Raca from './Raca';
import TipoCor from './TipoCor';
import Campanha from './Campanha';
import Classe from './Classe';
import Atributo from './Atributo';

export default class Personagem {
  constructor(public idPersonagem: number,
              public personagem: number,
              public vidaMaxima: number,
              public vidaAtual: number,
              public condicaoFisicaMaxima: number,
              public condicaoFisicaAtual: number,
              public level: number,
              public experiencia: number) {
  }
}
