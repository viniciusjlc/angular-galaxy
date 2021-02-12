import {Component, OnInit} from '@angular/core';
import Campanha from '../../models/Campanha';
import {CampanhaService} from '../../services/campanha/campanha.service';
import {SessionService} from '../../services/session/session.service';

@Component({
  selector: 'app-mestre',
  templateUrl: './mestre.component.html',
  styleUrls: ['./mestre.component.css']
})
export class MestreComponent implements OnInit {
  listaCampanhas: Campanha[];
  campanha: Campanha;

  constructor(private campanhaServive: CampanhaService) {
  }

  ngOnInit(): void {
    this.iniciarListaCampanhaPorJogadorAtual();
  }

  async iniciarListaCampanhaPorJogadorAtual(): Promise<void> {
    this.listaCampanhas = await this.campanhaServive.listarCampanhaPorMestre(SessionService.obterUsuarioSessao().id);
  }

  abrirDialogEditar(campanha: any): void {

  }

  confirmarExcluir(campanha: any): void {

  }
}
