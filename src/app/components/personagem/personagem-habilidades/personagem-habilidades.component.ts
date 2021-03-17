import {Component, Input, OnInit} from '@angular/core';
import Personagem from '../../../models/Personagem';
import {PersonagemService} from '../../../services/personagem/personagem.service';
import {HabilidadeService} from '../../../services/habilidade/habilidade.service';

@Component({
  selector: 'app-personagem-habilidades',
  templateUrl: './personagem-habilidades.component.html',
  styleUrls: ['./personagem-habilidades.component.css']
})
export class PersonagemHabilidadesComponent implements OnInit {
  @Input() personagem: Personagem;

  constructor(private personagemService: PersonagemService, private habilidadeService: HabilidadeService) {
  }

  ngOnInit(): void {
  }
}
