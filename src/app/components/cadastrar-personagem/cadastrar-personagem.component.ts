import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem} from 'primeng/api';
import Campanha from '../../models/Campanha';
import {CampanhaService} from '../../services/campanha/campanha.service';
import {SessionService} from '../../services/session/session.service';
import Personagem from '../../models/Personagem';
import Raca from '../../models/Raca';
import Classe from '../../models/Classe';
import TipoCor from '../../models/TipoCor';
import {Usuario} from '../../models/Usuario';
import Mestre from '../../models/Mestre';

@Component({
  selector: 'app-cadastrar-personagem',
  templateUrl: './cadastrar-personagem.component.html',
  styleUrls: ['./cadastrar-personagem.component.css']
})
export class CadastrarPersonagemComponent implements OnInit {
  itens: MenuItem[];
  abaAtual: number = 0;
  campanhas: Campanha[];
  personagem: Personagem = new Personagem(null,
    new Raca(null, null, null, null, null, null, null, null, null),
    new Classe(null, null, null),
    null, null, null, null,
    new TipoCor(null, null, null),
    new TipoCor(null, null, null),
    new TipoCor(null, null, null),
    new SessionService().userSession.id,
    new Campanha(null, null, new Mestre(null, null)));

  constructor(private campanhaServive: CampanhaService,
              private confirmationService: ConfirmationService) {
  }

  async iniciarListaCampanhaPorJogadorAtual(): Promise<void> {
    this.campanhas = await this.campanhaServive.listarCampanhaPorMestre(SessionService.instace.userSession.id);
  }

  ngOnInit(): void {
    this.iniciarListaCampanhaPorJogadorAtual();
    this.itens = [{
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
    console.log(this.abaAtual);
  }

  nextPage(): void {
    this.abaAtual++;
  }

  prevPage(): void {
    this.abaAtual--;
  }

  retornarCor(idCampanha): string {
    return this.personagem.campanha.id === idCampanha ? '#f5cf00' : '#a47e19';
  }

  clicar(campanhaSelecionada): void {
    console.log(campanhaSelecionada);
  }
}
