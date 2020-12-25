import {Component, OnInit} from '@angular/core';
import {VersaoService} from '../../services/versao/versao.service';
import {Versao} from '../../models/Versao';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showDialogVersao: boolean = false;
  listaVersoes: Versao[];
  versaoAtual: Versao = new Versao(null, null, new Date(), null);

  constructor(private versaoService: VersaoService) {
  }

  async ngOnInit(): Promise<void> {
    this.versaoAtual = await this.versaoService.retornarVersaoAtual();
  }

  async abrirDlgVersoes(): Promise<void> {
    this.listaVersoes = await this.versaoService.listar();
    this.showDialogVersao = true;
  }
}
