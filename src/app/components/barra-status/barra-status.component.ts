import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-barra-status',
  templateUrl: './barra-status.component.html',
  styleUrls: ['./barra-status.component.css']
})
export class BarraStatusComponent implements OnInit {
  @Input() label: string;
  @Input() valorMaximo: number;
  @Input() valorAtual: number;
  @Input() cor1: string;
  @Input() cor2: string;
  valorPorcentagem;
  categoriaMascara: string;

  constructor() {
  }

  ngOnInit(): void {
    this.valorPorcentagem = this.valorAtual / this.valorMaximo * 100;
    this.categoriaMascara = this.valorPorcentagem < 100 ? '2' : '3';
    this.categoriaMascara += '.0-2';
  }

}
