import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../models/Usuario';
import {SessionService} from '../../services/session/session.service';
import {UsuarioService} from '../../services/usuario/usuario.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {
  isLogado: boolean = false;
  paginaAtual: string;

  usuario: Usuario = new Usuario('teste@teste.com', 'Vinicius', 'teste');

  showSideBarUser: boolean;
  showLogin: boolean;
  showCadastro: boolean;
  showContaUsuario: boolean;
  showDadosCadastrais: boolean;
  showAlterarSenha: boolean;
  showExcluirConta: boolean;

  confirmacaoSenha: string = '';

  constructor() {
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('userSession'));
    if (user !== null) {
      console.log(user);
      SessionService.gravarUsuarioSessao(user);
      this.isLogado = true;
    }
  }

  sair(): void {
    this.isLogado = false;
    this.paginaAtual = 'home';
    this.showContaUsuario = false;
    SessionService.destruirSessao();
  }

  onSubmit(form): void {
    console.log(form);
  }
}
