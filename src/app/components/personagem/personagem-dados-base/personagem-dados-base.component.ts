import {Component, Input, OnInit} from '@angular/core';
import Personagem from '../../../models/Personagem';

@Component({
  selector: 'app-personagem-dados-base',
  templateUrl: './personagem-dados-base.component.html',
  styleUrls: ['./personagem-dados-base.component.css']
})
export class PersonagemDadosBaseComponent implements OnInit {
  @Input() personagem: Personagem;

  constructor() { }

  ngOnInit(): void {
  }

  retornarGenero(): string {
    return this.personagem.sexo === 'M' ? 'Masc.' :
      this.personagem.sexo === 'F' ? 'Fem,' : 'Indef.';
  }


}
