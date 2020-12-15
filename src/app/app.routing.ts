import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {UniversoComponent} from './components/universo/universo.component';
import {CampanhaComponent} from './components/campanha/campanha.component';
import {SobreComponent} from './components/sobre/sobre.component';
import {ListaPersonagensComponent} from './components/lista-personagens/lista-personagens.component';
import {PersonagemComponent} from './components/personagem/personagem.component';
import {CadastrarPersonagemComponent} from './components/cadastrar-personagem/cadastrar-personagem.component';


const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'universo', component: UniversoComponent},
  {path: 'campanha', component: CampanhaComponent},
  {path: 'personagem', component: ListaPersonagensComponent},
  {path: 'personagem/cadastrar', component: CadastrarPersonagemComponent},
  {path: 'universo', component: UniversoComponent},
  {path: 'sobre', component: SobreComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

