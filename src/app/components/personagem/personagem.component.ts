import {Component, Input, OnInit} from '@angular/core';
import Personagem from '../../models/Personagem';
import {ActivatedRoute} from '@angular/router';
import {PersonagemService} from '../../services/personagem/personagem.service';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {
  personagem: Personagem;

  constructor(private route: ActivatedRoute,
              private personagemService: PersonagemService) { }

  async ngOnInit(): Promise<void> {
    const personagemId = this.route.snapshot.paramMap.get('personagemId');
    this.personagem = await this.personagemService.consultarPersonagemPorId(+personagemId);
    console.log(this.personagem);
  }

}
