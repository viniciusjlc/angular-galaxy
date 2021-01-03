import {Component, Input, OnInit} from '@angular/core';
import Personagem from '../../models/Personagem';
import {ActivatedRoute} from '@angular/router';
import {PersonagemService} from '../../services/personagem/personagem.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {
  personagem: Personagem;
  itensMenuPersonagem: MenuItem[];

  constructor(private route: ActivatedRoute,
              private personagemService: PersonagemService) {
  }

  async ngOnInit(): Promise<void> {
    const personagemId = this.route.snapshot.paramMap.get('personagemId');
    this.personagem = await this.personagemService.consultarPersonagemPorId(+personagemId);
    this.itensMenuPersonagem = [{
      label: this.personagem.nome,
      style: {'background-color': 'red'},
      items: [{
        label: 'Dados Base',
        command: () => {
        }
      },
        {
          label: 'Atributos & Especialidades',
          command: () => {
          }
        }
      ]
    }
    ];
  }

}
