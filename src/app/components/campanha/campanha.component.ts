import {Component, OnInit} from '@angular/core';
import Campanha from '../../models/Campanha';
import {CampanhaService} from '../../services/campanha/campanha.service';
import {SessionService} from '../../services/session/session.service';
import {ConfirmationService, Message} from 'primeng/api';
import Mestre from '../../models/Mestre';
import {Dialog} from 'primeng/dialog';

@Component({
  selector: 'app-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.css']
})
export class CampanhaComponent implements OnInit {
  listaCampanhas: Campanha[];
  campanha: Campanha = new Campanha('', '', new Mestre(null, ''), null, '');
  showDialogCadastrarEditar: boolean;
  tituloDialgoCadastrarEditar: string = '';
  msgs: Message[] = [];
  mensagemErroCadastroEdicao: string = null;

  constructor(private campanhaServive: CampanhaService,
              private confirmationService: ConfirmationService) {
    this.iniciarListaCampanhaPorJogadorAtual();
  }

  ngOnInit(): void {
  }

  async iniciarListaCampanhaPorJogadorAtual(): Promise<void> {
    this.listaCampanhas = await this.campanhaServive.listarCampanhaPorMestre(SessionService.obterUsuarioSessao().id);
  }

  abrirDialogEditar(campanha: any): void {
    this.tituloDialgoCadastrarEditar = 'Editar';
    this.showDialogCadastrarEditar = true;
    this.campanha = campanha;
  }

  abrirDialogCadastrar(): void {
    this.tituloDialgoCadastrarEditar = 'Cadastrar';
    this.showDialogCadastrarEditar = true;
  }

  excluir(campanha: Campanha): void {
    this.confirmationService.confirm({
      message: 'Deseja excluir a campanha ' + campanha.titulo + '?',
      header: 'Confirmar Exclusão',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.msgs = [{severity: 'info', summary: 'Excluida', detail: 'Campanha excluida com sucesso!'}];
      }
    });
  }

  salvarCampanha(): void {
    if (this.campanha.titulo === '' || this.campanha.descricao === '') {
      this.mensagemErroCadastroEdicao = 'É obrigatório informar todos os campos!';
    } else {
      this.campanhaServive.cadastrar(this.campanha);
      this.msgs = [{severity: 'success', summary: 'Suceso', detail: 'Campanha cadastrada com sucesso!'}];
      this.showDialogCadastrarEditar = false;
      this.iniciarListaCampanhaPorJogadorAtual();
    }
  }

  mestrar(campanha: Campanha): void {

  }

  showDialog(dialog: Dialog): void {
    if (window.innerWidth < 993) {
      dialog.maximize();
    }
  }

  retornarWidth(): string {
    if (window.innerWidth < 993) {
      return '100%';
    }
    return '50vw';
  }
}
