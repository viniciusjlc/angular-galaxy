import {Component, Input, OnInit} from '@angular/core';
import Personagem from '../../../models/Personagem';
import Atributo from '../../../models/Atributo';

@Component({
  selector: 'app-personagem-atributos',
  templateUrl: './personagem-atributos.component.html',
  styleUrls: ['./personagem-atributos.component.css']
})
export class PersonagemAtributosComponent implements OnInit {
  @Input() listaAtributos: Atributo[];
  constructor() { }

  ngOnInit(): void {

  }

}
