import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSideBarUser: boolean;
  showLogin: boolean;
  showCadastro: boolean;
  showDadosUsuario: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
