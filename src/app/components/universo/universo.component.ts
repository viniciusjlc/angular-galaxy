import {Component, OnInit} from '@angular/core';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import {UniversoService} from '../../services/universo/universo.service';
import {ItemUniverso} from '../../models/ItemUniverso';
import {ZonaGalacticaService} from '../../services/zona-galactica/zona-galactica.service';
import {Planeta} from '../../models/Planeta';
import {ZonaGalactica} from '../../models/ZonaGalactica';

@Component({
  selector: 'app-universo',
  templateUrl: './universo.component.html',
  styleUrls: ['./universo.component.css']
})
export class UniversoComponent implements OnInit {
  itensMenu: MegaMenuItem[];
  itemMenu: MegaMenuItem;
  itemUniverso: ItemUniverso = new ItemUniverso('', '', null);
  itensUniverso: ItemUniverso[];
  listaItensInternos: MenuItem[][];
  listaZonaGalacticas: ZonaGalactica[];
  itens: MenuItem[];

  constructor(private universoService: UniversoService, private zonaGalacticaService: ZonaGalacticaService) {
  }

  async ngOnInit(): Promise<void> {
    this.itensUniverso = await this.universoService.listarItensUniverso();
    this.listaZonaGalacticas = await this.zonaGalacticaService.listar();
    this.comporItensMenu();
  }

  async comporItensMenu(): Promise<void> {
    this.itens = [];
    console.log(this.itensUniverso);
    for (const itemUniverso of this.itensUniverso) {
      this.itens.push({
        label: itemUniverso.titulo,
        items: this.obterItensPorTipo(itemUniverso),
        command: () => {
          if (itemUniverso.texto != null) {
            this.itemUniverso = itemUniverso;
          }
        }
      });
    }
  }

  private obterItensPorTipo(item: ItemUniverso): MenuItem[] {
    let itens: MenuItem[];
    if (item.tipo === 1 && item.listaItensUniverso != null) {
      itens = this.obterItensInternos(item.listaItensUniverso);
    } else if (item.tipo === 2) {
      itens = this.obterItensZonaGalactica();
    } else {
      return null;
    }
    return itens;
  }


  private obterItensZonaGalactica(): MenuItem[] {
    let itensInternos: MenuItem[];
    itensInternos = [];
    for (const itemZonaGalactica of this.listaZonaGalacticas) {
      itensInternos.push({
        label: itemZonaGalactica.nome,
        items: itemZonaGalactica.listaPlanetas != null ? this.obterItensPlanetas(itemZonaGalactica.listaPlanetas) : null
      });
    }
    return itensInternos;
  }

  private obterItensPlanetas(listaPlanetas: Planeta[]): MenuItem[] {
    let itensInternos: MenuItem[];
    itensInternos = [];
    for (const itemPlaneta of listaPlanetas) {
      const itemUniverso: ItemUniverso = new ItemUniverso(itemPlaneta.nome, itemPlaneta.descricao, 2, itemPlaneta.imagem);
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

  private obterItensInternos(listaItensUniversoInternos: ItemUniverso[]): MenuItem[] {
    let itensInternos: MenuItem[];
    itensInternos = [];
    for (const itemUniverso of listaItensUniversoInternos) {
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
    this.itemUniverso = new ItemUniverso('', '', null);
  }
}
