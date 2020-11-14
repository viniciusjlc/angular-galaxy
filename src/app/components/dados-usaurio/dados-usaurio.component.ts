import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from '../../models/Usuario';
import {SessionService} from '../../services/session/session.service';

@Component({
  selector: 'app-dados-usaurio',
  templateUrl: './dados-usaurio.component.html',
  styleUrls: ['./dados-usaurio.component.css']
})
export class DadosUsaurioComponent implements OnInit {
  @Input() usuario: Usuario;
  showDadosCadastrais: boolean;
  showAlterarSenha: boolean;
  showExcluirConta: boolean;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
    /*this.usuario = this.sessionService.userSession;*/
  }

}
