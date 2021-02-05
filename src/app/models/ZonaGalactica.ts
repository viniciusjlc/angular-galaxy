import {Planeta} from './Planeta';

export class ZonaGalactica {
  constructor(
    public nome: string,
    public listaPlanetas: Planeta[],
    public id?: number) {
  }
}
