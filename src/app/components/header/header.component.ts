import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../models/Usuario';
import {SessionService} from '../../services/session/session.service';
import {UsuarioService} from '../../services/usuario/usuario.service';
import {MessageService} from 'primeng/api';
import {JwtService} from "../../services/jwt/jwt.service";

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
  usuarioCadastro: Usuario = new Usuario('vaches@teste.com', 'Vaches', 'teste');

  showSideBarUser: boolean;
  showLogin: boolean;
  showCadastro: boolean;
  showContaUsuario: boolean;
  showDadosCadastrais: boolean;
  showAlterarSenha: boolean;
  showExcluirConta: boolean;

  confirmacaoSenha: string;

  mensagemErroLogin: string;
  mensagemErroCadastro: string;

  constructor(private usuarioService: UsuarioService,
              private messageService: MessageService) {
  }

  async ngOnInit(): Promise<void> {
  }

  async logar(): Promise<void> {
    if (this.usuario.email === '' || this.usuario.senha === '') {
      this.mensagemErroLogin = 'Email e Senha obrigatórios!';
    } else {
      this.isLogado = await this.usuarioService.autenticar(this.usuario);
      if (this.isLogado) {
        this.showSideBarUser = false;
        this.usuario = await this.usuarioService.consultarPorEmail({
          email: this.usuario.email,
          senha: this.usuario.senha
        });
        SessionService.instace.gravarUsuario(this.usuario);
        this.messageService.add({key: 'tc', severity: 'success', summary: 'Sucesso', detail: 'Login realizado com sucesso'});
      } else {
        this.mensagemErroLogin = 'Email ou Senha incorretos!';
      }
    }
  }

  async cadastrarUsuario(): Promise<void> {
    console.log('teste');
    if (
      this.usuarioCadastro.email === ''
      || this.usuarioCadastro.senha === ''
      || this.usuarioCadastro.nome === ''
      || this.confirmacaoSenha === '') {
      this.mensagemErroCadastro = 'Todos os campos são obrigatórios!';
    } else if (this.usuarioCadastro.senha !== this.confirmacaoSenha) {
      this.mensagemErroCadastro = 'Senha e confimação devem ser iguais!';
    } else {
      const retorno: boolean = await this.usuarioService.cadastrar(this.usuarioCadastro);
      if (retorno) {
        this.showLogin = false;
        this.showCadastro = false;
        this.showSideBarUser = false;
        this.isLogado = true;
        this.usuario = this.usuarioCadastro;
        this.messageService.add({key: 'tc', severity: 'success', summary: 'Sucesso', detail: 'Cadastro realizado com sucesso'});
      } else {
        this.mensagemErroCadastro = 'Erro ao realizar o cadastro! Entre em contato com o administrador do sistema';
      }
    }
  }
}
