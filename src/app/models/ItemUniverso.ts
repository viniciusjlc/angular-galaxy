export class ItemUniverso {
  constructor(
    public titulo: string,
    public texto: string,
    public tipo?: number,
    public imagem?,
    public listaItensUniverso?: ItemUniverso[],
    public id?: number) {
  }
}
