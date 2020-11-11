import {Component, OnInit} from '@angular/core';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import {UniversoService} from '../../services/universo/universo.service';
import {ItemUniverso} from '../../models/ItemUniverso';

@Component({
  selector: 'app-universo',
  templateUrl: './universo.component.html',
  styleUrls: ['./universo.component.css']
})
export class UniversoComponent implements OnInit {
  itensMenu: MegaMenuItem[];
  itemMenu: MegaMenuItem;
  itemUniverso: ItemUniverso;
  itensUniverso: ItemUniverso[];
  listaItensInternos: MenuItem[][];
  listaItensInternos2: MenuItem[];
  item: MenuItem[];

  constructor(private universoService: UniversoService) {
  }

  async ngOnInit(): Promise<void> {
    this.itensUniverso = await this.universoService.listarItensUniverso();
    this.comporItensMenu();
  }

  comporItensMenu(): void {
    this.itensMenu = [];
    for (const itemUniverso of this.itensUniverso) {
      console.log(itemUniverso.titulo);
      this.itensMenu.push({
        label: itemUniverso.titulo,
        items: itemUniverso.listaItensUniverso != null ? this.getItems(itemUniverso.listaItensUniverso) : null
      });
    }
  }

  private getItems(lista: ItemUniverso[]): MenuItem[][] {
    this.listaItensInternos = [];
    for (const itemUniverso of lista) {
      this.listaItensInternos.push([{
        label: itemUniverso.titulo,
        items: itemUniverso.listaItensUniverso != null ? this.getItemsInternos(itemUniverso.listaItensUniverso) : null
      }]);
    }
    return this.listaItensInternos;
  }

  private getItemsInternos(lista: ItemUniverso[]): MenuItem[] {
    this.listaItensInternos2 = [];
    for (const itemUniverso of lista) {
      this.listaItensInternos2.push({
        label: itemUniverso.titulo,
        items: itemUniverso.listaItensUniverso != null ? this.getItemsInternos(itemUniverso.listaItensUniverso) : null,
        command: () => {
          this.itemUniverso = itemUniverso;
        }
      });
    }
    return this.listaItensInternos2;
  }
}
