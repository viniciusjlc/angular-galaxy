import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem} from 'primeng/api';
import Campanha from '../../models/Campanha';
import {CampanhaService} from '../../services/campanha/campanha.service';
import {SessionService} from '../../services/session/session.service';
import Personagem from '../../models/Personagem';

@Component({
  selector: 'app-cadastrar-personagem',
  templateUrl: './cadastrar-personagem.component.html',
  styleUrls: ['./cadastrar-personagem.component.css']
})
export class CadastrarPersonagemComponent implements OnInit {
  items: MenuItem[];
  abaAtual: number = 0;
  campanhas: Campanha[];
  personagem: Personagem;

  constructor(private campanhaServive: CampanhaService,
              private confirmationService: ConfirmationService) {
  }

  async iniciarListaCampanhaPorJogadorAtual(): Promise<void> {
    this.campanhas = await this.campanhaServive.listarCampanhaPorMestre(SessionService.instace.userSession.id);
  }

  ngOnInit(): void {
    this.items = [{
      label: 'Campanha'
    },
      {
        label: 'Raça & Classe'
      },
      {
        label: 'Características'
      },
      {
        label: 'História'
      }
    ];
    this.iniciarListaCampanhaPorJogadorAtual();
  }

  nextPage(): void{
    this.abaAtual++;
  }

  prevPage(): void{
    this.abaAtual--;
  }

}
