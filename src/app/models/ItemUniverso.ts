export class ItemUniverso {
  constructor(
    public titulo: string,
    public texto: string,
    public style: string,
    public listaItensUniverso: ItemUniverso[],
    public id?: number) {
  }
}
