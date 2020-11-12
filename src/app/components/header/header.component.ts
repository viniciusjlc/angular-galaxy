import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../models/Usuario';
import {SessionService} from "../../services/session/session.service";
import {UsuarioService} from "../../services/usuario/usuario.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogado: boolean = false;
  paginaAtual: string;

  usuario: Usuario = new Usuario('teste@teste.com', 'Vinicius', 'teste');
  usuarioCadastro: Usuario = new Usuario('vaches@teste.com', 'Vaches', 'teste');

  showSideBarUser: boolean;
  showLogin: boolean;
  showCadastro: boolean;
  showDadosUsuario: boolean;

  confirmacaoSenha: any;

  mensagemErroLogin: string;
  mensagemErroCadastro: string;

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
  }

  async logar(): Promise<void> {
    console.log(this.usuario);
    if (this.usuario.email === '' || this.usuario.senha === '') {
      this.mensagemErroLogin = 'Email e Senha obrigatórios!';
    } else {
      this.isLogado = await this.usuarioService.autenticar({
        email: this.usuario.email,
        senha: this.usuario.senha
      });
      if (this.isLogado) {
        this.showSideBarUser = false;
        this.usuario = await this.usuarioService.consultarPorEmail({
          email: this.usuario.email,
          senha: this.usuario.senha
        });
        SessionService.instace.gravarUsuario(this.usuario);
      } else {
        this.mensagemErroLogin = 'Email ou Senha incorretos!';
      }
    }
  }

  cadastrarUsuario(): void {
    console.log(this.usuarioCadastro);
  }
}
