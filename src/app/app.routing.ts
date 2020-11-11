import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {UniversoComponent} from './components/universo/universo.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'universo', component: UniversoComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

