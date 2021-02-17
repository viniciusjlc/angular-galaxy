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
import {PersonagemService} from '../../services/personagem/personagem.service';
import {Dialog} from "primeng/dialog";

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
  racaDetalhe: Raca = new Raca(null, null, null, null, null, null, null, null, null, null, null);
  classeDetalhe: Classe = new Classe(null, null, null, null);
  personagem: Personagem = new Personagem(null, null,
    new Raca(null, null, null, null, null, null, null, null, null),
    new Classe(null, null, null, null),
    null, null, null, null,
    new TipoCor(null, null, null),
    new TipoCor(null, null, null),
    new TipoCor(null, null, null),
    SessionService.obterUsuarioSessao().id,
    new Campanha(null, null, new Mestre(null, null), null),
    null, null, null, null);
  showSelecionarClasse: boolean = false;
  showSelecionarRaca: boolean = false;
  showSelecionarPele: boolean = false;
  showSelecionarCabelo: boolean = false;
  showSelecionarOlho: boolean = false;
  responsiveOptions;
  submitted: boolean = false;
  showCadastroSucesso: boolean = false;
  showCadastroErro: boolean = false;

  constructor(private campanhaService: CampanhaService,
              private classeService: ClasseService,
              private racaService: RacaService,
              private confirmationService: ConfirmationService,
              private personagemService: PersonagemService) {
  }

  async iniciarListaParaCadastro(): Promise<void> {
    this.campanhas = await this.campanhaService.listarCampanhaPorMestre(SessionService.obterUsuarioSessao().id);
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
    this.abaAtual++;
    this.rolarParaTopo();
    if (this.abaAtual !== 3 && this.personagem.raca !== null) {
      if (this.personagem.raca.nome === 'L\'Yana') {
        this.personagem.sexo = 'F';
      }
    }
  }

  prevPage(): void {
    this.abaAtual--;
    this.rolarParaTopo();
  }

  retornarEstiloCampanhaSelecionada(idCampanha): string {
    return this.personagem.campanha.id !== idCampanha ? 'opcoes-sua-conta' : 'opcoes-sua-conta-ativo';
  }

  retornarEstiloRacaSelecionada(idRaca): string {
    return this.personagem.raca.id !== idRaca ? 'opcoes-sua-conta' : 'opcoes-sua-conta-ativo';
  }

  retornarEstiloClasseSelecionada(idClasse): string {
    return this.personagem.classe.id !== idClasse ? 'opcoes-sua-conta' : 'opcoes-sua-conta-ativo';
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
        return this.personagem.raca.id === null;
      case 2:
        return this.personagem.classe.id == null;
      case 3:
        return this.personagem.nome === null || this.personagem.sexo === null ||
          this.personagem.idade === null || this.personagem.altura === null || this.personagem.peso === null ||
          this.personagem.pele.id === null || this.personagem.cabelo.id === null || this.personagem.olho.id === null;
      case 4:
        return true;
    }
    return true;
  }

  async cadastrar(): Promise<void> {
    this.personagem.listaAtributos = this.personagem.raca.listaAtributos;
    this.personagem.listaEspecialidades = this.personagem.classe.listaEspecialidades;
    this.personagem = await this.personagemService.cadastrar(this.personagem);
    this.showCadastroSucesso = this.personagem.id !== null;
  }

  showDialog(dialog: Dialog): void {
    if (window.innerWidth < 993) {
      dialog.maximize();
    }
  }

  rolarParaTopo(): void {
    window.scroll(0, 0);
  }

  retornarGenero(): string {
    return this.personagem.sexo === 'M' ? 'Masculino' :
      this.personagem.sexo === 'F' ? 'Feminino' : 'Indefinido';
  }
}
