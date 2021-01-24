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
    return this.personagem.sexo === 'M' ? 'Masculino' :
      this.personagem.sexo === 'F' ? 'Feminino' : 'Indefinido';
  }


}
