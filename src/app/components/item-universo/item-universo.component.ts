import {Component, Input, OnInit} from '@angular/core';
import {ItemUniverso} from '../../models/ItemUniverso';
import {UniversoService} from '../../services/universo/universo.service';
import {PlanetaService} from '../../services/planeta/planeta.service';
import {Planeta} from '../../models/Planeta';

@Component({
  selector: 'app-item-universo',
  templateUrl: './item-universo.component.html',
  styleUrls: ['./item-universo.component.css']
})
export class ItemUniversoComponent implements OnInit {
  @Input() itemUniverso: ItemUniverso;
  image: any;

  constructor() {
  }

  ngOnInit(): void {
    this.limparItemUniverso();
  }
  public limparItemUniverso(): void {
    this.itemUniverso = {
      titulo: '',
      texto: ''
    };
  }
}
