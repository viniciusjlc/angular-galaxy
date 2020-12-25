export class Versao {
  constructor(
    public titulo: string,
    public descricao: string,
    public dataCadastro: Date,
    public id?: number) {
  }

  get dataCadastroFormatada(): string {
    return this.dataCadastro !== null ? this.dataCadastro.toLocaleDateString() : null;
  }
}
