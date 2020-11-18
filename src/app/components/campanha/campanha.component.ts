import {Component, OnInit} from '@angular/core';
import Campanha from '../../models/Campanha';
import {CampanhaService} from '../../services/campanha/campanha.service';
import {SessionService} from '../../services/session/session.service';
import {ConfirmationService, Message} from 'primeng/api';

@Component({
  selector: 'app-campanha',
  templateUrl: './campanha.component.html',
  styleUrls: ['./campanha.component.css']
})
export class CampanhaComponent implements OnInit {
  listaCampanhas: Campanha[];
  campanha: Campanha;
  showDialogCadastrarEditar: boolean;
  tituloDialgoCadastrarEditar: string = '';
  msgs: Message[] = [];

  constructor(private campanhaServive: CampanhaService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.iniciarListaCampanhaPorJogadorAtual();
  }

  async iniciarListaCampanhaPorJogadorAtual(): Promise<void> {
    this.listaCampanhas = await this.campanhaServive.listarCampanhaPorMestre(SessionService.instace.userSession.id);
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

  excluir(campanha: any): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'You have accepted'}];
      },
      reject: () => {
        this.msgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
      }
    });
  }

}
