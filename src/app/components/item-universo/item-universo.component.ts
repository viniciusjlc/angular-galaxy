import {Component, Input, OnInit} from '@angular/core';
import {ItemUniverso} from '../../models/ItemUniverso';

@Component({
  selector: 'app-item-universo',
  templateUrl: './item-universo.component.html',
  styleUrls: ['./item-universo.component.css']
})
export class ItemUniversoComponent implements OnInit {
  @Input() itemUniverso: ItemUniverso;

  constructor() { }

  ngOnInit(): void {
  }

}
