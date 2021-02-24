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
  itemAtual: string;

  constructor(private route: ActivatedRoute,
              private personagemService: PersonagemService) {
  }

  async ngOnInit(): Promise<void> {
    this.itemAtual = 'BASE';
    const personagemId = this.route.snapshot.paramMap.get('personagemId');
    this.personagem = await this.personagemService.consultarPersonagemPorId(+personagemId);
    console.log(this.personagem);
    this.itensMenuPersonagem = [{
      items: [{
        label: 'Dados Base',
        command: () => {
          this.itemAtual = 'BASE';
        }
      },
        {
          label: 'Atributos & Especialidades',
          command: () => {
            this.itemAtual = 'ATRIBUTOS';
          }
        }
      ]
    }
    ];
  }

  isMobileSize(): boolean {
    return window.innerWidth < 993;
  }
}
