import {Component, OnInit} from '@angular/core';
import {ConfirmationService, Message, MessageService} from 'primeng/api';
import {PersonagemService} from '../../services/personagem/personagem.service';
import {SessionService} from '../../services/session/session.service';
import Personagem from '../../models/Personagem';

@Component({
  selector: 'app-lista-personagens',
  templateUrl: './lista-personagens.component.html',
  styleUrls: ['./lista-personagens.component.css']
})
export class ListaPersonagensComponent implements OnInit {
  msgs: Message[] = [];
  listaPersonagens: Personagem[];

  constructor(private personagemService: PersonagemService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.iniciarListaPersonagensPeloJogadorAtual();
  }

  async iniciarListaPersonagensPeloJogadorAtual(): Promise<void> {
    this.listaPersonagens = await this.personagemService.listarPersonagensPorUsuario(SessionService.instace.userSession.id);
  }

  excluir(personagem): void {
    this.confirmationService.confirm({
      message: 'Realmente deseja cancelar o personagem: ' + personagem.nome + '?',
      header: 'Confirmar exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso!',
          detail: 'Exclusão do personagem ' + personagem.nome + ' realizada com sucesso'
        });
        this.personagemService.excluirPersonagemPorId(personagem.id);
        this.iniciarListaPersonagensPeloJogadorAtual();
      }
    });
  }
}
