import {Component, Input, OnInit} from '@angular/core';
import Personagem from '../../../models/Personagem';
import {PersonagemService} from '../../../services/personagem/personagem.service';
import {HabilidadeService} from '../../../services/habilidade/habilidade.service';
import {Dialog} from 'primeng/dialog';
import Habilidade from '../../../models/Habilidade';
import {ConfirmationService, MessageService} from 'primeng/api';
import Atributo from '../../../models/Atributo';
import Especialidade from '../../../models/Especialidade';
import HabilidadeRequisito from '../../../models/HabilidadeRequisito';

@Component({
  selector: 'app-personagem-habilidades',
  templateUrl: './personagem-habilidades.component.html',
  styleUrls: ['./personagem-habilidades.component.css']
})
export class PersonagemHabilidadesComponent implements OnInit {
  @Input() personagem: Personagem;
  listaHabilidadePorClasse: Habilidade[];
  showDialogComprarHabilidades: boolean;

  constructor(private personagemService: PersonagemService, private habilidadeService: HabilidadeService,
              private confirmationService: ConfirmationService, private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  retornarTipoHabilidade(tipo): string {
    return tipo === 'A' ? 'Ativa' : 'Passiva.';
  }

  showDialog(dialog: Dialog): void {
    if (window.innerWidth < 993) {
      dialog.maximize();
    }
  }

  async abrirDialogComprarHabilidade(): Promise<void> {
    this.showDialogComprarHabilidades = true;
    this.listaHabilidadePorClasse = await this.habilidadeService.consultarPorClasse(this.personagem.classe.id);
  }

  async confirmarCompra(habilidade: Habilidade): Promise<void> {
    if (this.personagem.pontos.level - this.personagem.listaHabilidade.length > 0) {
      if (this.validarRequisitosHabilidade(habilidade)) {
        this.confirmationService.confirm({
          message: 'Tem certeza que deseja comprar a habilidade ' + habilidade.nome + ' ?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: async () => {
            this.messageService.add({severity: 'info', summary: 'Sucesso', detail: 'Habilidade comprada com sucesso'});
            await this.habilidadeService.comprarHabilidade({
              habilidadeDTO: habilidade, personagemDTO: this.personagem
            });
            this.personagem.listaHabilidade = await this.habilidadeService.consultarPorPersonagem(this.personagem.id);
            this.showDialogComprarHabilidades = false;
          }
        });
      }
    }else{
      this.messageService.add({severity: 'warn', summary: 'Alerta', detail: 'Seu personagem não tem pontos necessários para comprar uma habilidade'});
    }
  }

  validarRequisitosHabilidade(habilidade: Habilidade): boolean {
    let valido = true;
    this.validarLevel(habilidade, valido);
    if (habilidade.habilidadesRequisitos !== undefined) {
      valido = this.validarAtributoEEspecialidade(habilidade, valido);
    }
    return valido;
  }

  private validarLevel(habilidade: Habilidade, valido: boolean): void {
    if (this.personagem.pontos.level <= habilidade.levelNecessario) {
      this.messageService.add({
        severity: 'error',
        summary: 'Requisito insatisfeito! ',
        detail: 'É necessário ter level ' + habilidade.levelNecessario
          + ', mas seu personagem é level '
          + this.personagem.pontos.level
      });
      valido = false;
    }
  }

  private validarAtributoEEspecialidade(habilidade: Habilidade, valido: boolean): boolean {
    habilidade.habilidadesRequisitos.forEach(requesito => {
      if (requesito.atributo !== undefined) {
        valido = this.validarRequesito(requesito, valido);
      } else {
        valido = this.validarRequesitoEspecialidade(requesito, valido);
      }
    });
    return valido;
  }

  private validarRequesito(requesito: HabilidadeRequisito, valido: boolean): boolean {
    const atributoJogador = this.obterAtributoPorId(requesito.atributo.id);
    if (atributoJogador.valor <= requesito.valor) {
      this.messageService.add({
        severity: 'error',
        summary: 'Requisito insatisfeito! ',
        detail: 'É necessário ter ' + requesito.valor + ' em '
          + requesito.atributo.nome + ', mas seu personagem apenas tem '
          + atributoJogador.valor
      });
      valido = false;
    }
    return valido;
  }

  private validarRequesitoEspecialidade(requesito: HabilidadeRequisito, valido: boolean): boolean {
    const especialidadeJogador = this.obterEspecialidadePorId(requesito.especialidade.id);
    if (especialidadeJogador.valor <= requesito.valor) {
      this.messageService.add({
        severity: 'error',
        summary: 'Requisito insatisfeito! ',
        detail: 'É necessário ter ' + requesito.valor + ' em '
          + requesito.especialidade.nome + ', mas seu personagem apenas tem '
          + especialidadeJogador.valor
      });
      valido = false;
    }
    return valido;
  }

  obterAtributoPorId(id): Atributo {
    let atributoBuscado: Atributo;
    this.personagem.listaAtributos.forEach(atributo => {
      if (atributo.id === id) {
        atributoBuscado = atributo;
      }
    });
    return atributoBuscado;
  }

  obterEspecialidadePorId(id): Especialidade {
    let especialidadeBuscado: Especialidade;
    this.personagem.listaEspecialidades.forEach(especialidade => {
      if (especialidade.id === id) {
        especialidadeBuscado = especialidade;
      }
    });
    return especialidadeBuscado;
  }

  retornarTamanhoDialog(): string {
    return window.innerWidth > 993 ? '50vw' : '100%';
  }
}
