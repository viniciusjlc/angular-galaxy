import {Component, Input, OnInit} from '@angular/core';
import Personagem from '../../../models/Personagem';

@Component({
  selector: 'app-personagem-rolagem',
  templateUrl: './personagem-rolagem.component.html',
  styleUrls: ['./personagem-rolagem.component.css']
})
export class PersonagemRolagemComponent implements OnInit {
  @Input() personagem: Personagem;

  constructor() { }

  ngOnInit(): void {
  }

}
