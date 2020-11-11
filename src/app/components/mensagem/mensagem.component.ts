import {Component, Input, OnInit} from '@angular/core';
import {Mensagem} from '../../models/Mensagem';
import {MensagemService} from '../../services/mensagem/mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {
  listaMensagem: Mensagem[];
  @Input() tipo: string;
  @Input() titulo: string;

  constructor(private mensagemService: MensagemService) {
  }

  async ngOnInit(): Promise<void> {
    this.listaMensagem = await this.mensagemService.listarMensagensPorTipo(this.tipo);
  }

}
