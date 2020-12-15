import {Component, OnInit} from '@angular/core';
import {Message} from 'primeng/api';
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

  constructor(private personagemService: PersonagemService) {
  }

  ngOnInit(): void {
    this.iniciarListaPersonagensPeloJogadorAtual();
  }

  async iniciarListaPersonagensPeloJogadorAtual(): Promise<void> {
    this.listaPersonagens = await this.personagemService.listarPersonagensPorUsuario(SessionService.instace.userSession.id);
  }

  excluir(personagem): void {

  }

  jogar(personagem): void {

  }

  teste(): void{
    console.log('teste');
  }
}
