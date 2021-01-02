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
  itemUniverso: ItemUniverso = new ItemUniverso('', '', '');
  itensUniverso: ItemUniverso[];
  listaItensInternos: MenuItem[][];
  listaItensInternos2: MenuItem[];
  itens: MenuItem[];

  constructor(private universoService: UniversoService) {
  }

  async ngOnInit(): Promise<void> {
    this.itensUniverso = await this.universoService.listarItensUniverso();
    this.comporItensMenu();
  }

  comporItensMenu(): void {
    this.itens = [];
    for (const itemUniverso of this.itensUniverso) {
      console.log(itemUniverso);
      this.itens.push({
        label: itemUniverso.titulo,
        items: itemUniverso.listaItensUniverso != null ? this.obterItensInternos(itemUniverso.listaItensUniverso) : null
      });
    }
  }

  private obterItensInternos(listaItensUniversoInternos: ItemUniverso[]): MenuItem[] {
    let itensInternos: MenuItem[];
    itensInternos = [];
    for (const itemUniverso of listaItensUniversoInternos) {
      console.log(itemUniverso);
      itensInternos.push({
        label: itemUniverso.titulo,
        items: itemUniverso.listaItensUniverso != null ? this.obterItensInternos(itemUniverso.listaItensUniverso) : null,
        command: () => {
          if (itemUniverso.texto != null) {
            this.itemUniverso = itemUniverso;
          }
        }
      });
    }
    return itensInternos;
  }


  limparUniverso(): void {
    this.itemUniverso = new ItemUniverso('', '', '');
  }

  /*comporItensMenu(): void {
    this.itensMenu = [];
    for (const itemUniverso of this.itensUniverso) {
      console.log(itemUniverso);
      this.itensMenu.push({
        label: itemUniverso.titulo,
        items: itemUniverso.listaItensUniverso != null ? this.getItems(itemUniverso.listaItensUniverso) : null
      });
    }
  }*/

  /*private getItems(lista: ItemUniverso[]): MenuItem[][] {
    this.listaItensInternos = [];
    for (const itemUniverso of lista) {
      console.log(itemUniverso);
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
      console.log(itemUniverso);
      this.listaItensInternos2.push({
        label: itemUniverso.titulo,
        items: itemUniverso.listaItensUniverso != null ? this.getItemsInternos(itemUniverso.listaItensUniverso) : null,
        command: () => {
          this.itemUniverso = itemUniverso;
        }
      });
    }
    return this.listaItensInternos2;
  }*/
}
