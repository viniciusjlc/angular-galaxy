import {Component, Input, OnInit} from '@angular/core';
import Personagem from '../../../models/Personagem';

@Component({
  selector: 'app-personagem-status',
  templateUrl: './personagem-status.component.html',
  styleUrls: ['./personagem-status.component.css']
})
export class PersonagemStatusComponent implements OnInit {
  @Input() personagem: Personagem;

  constructor() { }

  ngOnInit(): void {
  }

}
