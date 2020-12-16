import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem} from 'primeng/api';
import Campanha from '../../models/Campanha';
import {CampanhaService} from '../../services/campanha/campanha.service';
import {SessionService} from '../../services/session/session.service';
import Personagem from '../../models/Personagem';
import Raca from '../../models/Raca';
import Classe from '../../models/Classe';
import TipoCor from '../../models/TipoCor';
import Mestre from '../../models/Mestre';
import {ClasseService} from '../../services/classe/classe.service';
import {RacaService} from '../../services/raca/raca.service';

@Component({
  selector: 'app-cadastrar-personagem',
  templateUrl: './cadastrar-personagem.component.html',
  styleUrls: ['./cadastrar-personagem.component.css']
})
export class CadastrarPersonagemComponent implements OnInit {
  itens: MenuItem[];
  abaAtual: number = 0;
  campanhas: Campanha[];
  classes: Classe[];
  racas: Raca[];
  personagem: Personagem = new Personagem(null,
    new Raca(null, null, null, null, null, null, null, null, null),
    new Classe(null, null, null),
    null, null, null, null,
    new TipoCor(null, null, null),
    new TipoCor(null, null, null),
    new TipoCor(null, null, null),
    SessionService.instace.userSession.id,
    new Campanha(null, null, new Mestre(null, null), null));
  showSelecionarClasse: boolean = false;
  showSelecionarRaca: boolean = false;
  responsiveOptions;
  submitted: boolean = false;

  constructor(private campanhaService: CampanhaService,
              private classeService: ClasseService,
              private racaService: RacaService,
              private confirmationService: ConfirmationService) {
  }

  async iniciarListaParaCadastro(): Promise<void> {
    this.campanhas = await this.campanhaService.listarCampanhaPorMestre(SessionService.instace.userSession.id);
    this.racas = await this.racaService.listarRacas();
    this.classes = await this.classeService.listarClasses();
  }

  ngOnInit(): void {
    this.iniciarListaParaCadastro();
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

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  nextPage(): void {
    console.log(this.personagem);
    this.abaAtual++;
  }

  prevPage(): void {
    this.abaAtual--;
  }

  retornarClasse(idCampanha): string {
    return this.personagem.campanha.id !== idCampanha ? 'item-campanha' : 'item-campanha-ativo';
  }

  selecionarRaca(raca): void {
    this.confirmationService.confirm({
      message: 'Deseja selecionar a raça "' + raca.nome + '"?',
      header: 'Confirmar Raça',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.personagem.raca = raca;
        this.showSelecionarRaca = false;
      }
    });
  }

  selecionarClasse(classe): void {
    this.confirmationService.confirm({
      message: 'Deseja selecionar a classe "' + classe.nome + '"?',
      header: 'Confirmar Classe',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.personagem.classe = classe;
        this.showSelecionarClasse = false;
      }
    });
  }

  desabilitarPorAba(): boolean {
    switch (this.abaAtual) {
      case 0:
        return this.personagem.campanha.id === null;
      case 1:
        return this.personagem.raca.id === null || this.personagem.classe.id == null;
      case 2:
        return true;
      case 3:
        return true;
    }
    return true;
  }

}
