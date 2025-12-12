import { Routes } from '@angular/router';

import { Menu } from './components/menu/menu';
import { Acerca } from './components/acerca/acerca';
import { Juego } from './components/juego/juego';
import { Logro } from './components/logro/logro';
import { Reco } from './components/reco/reco';

export const routes: Routes = [
  { path: '', component: Menu},              
  { path: 'acerca', component: Acerca },
  { path: 'juego', component: Juego },
  { path: 'logro', component: Logro },
  { path: 'reco', component: Reco },
  { path: '**', redirectTo: '' }                       
];