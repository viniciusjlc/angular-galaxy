import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-barra-status',
  templateUrl: './barra-status.component.html',
  styleUrls: ['./barra-status.component.css']
})
export class BarraStatusComponent implements OnInit {
  @Input() label: string;
  @Input() valor: number;
  @Input() cor1: string;
  @Input() cor2: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
