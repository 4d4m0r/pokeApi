import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonFavsPage } from './pokemon-favs.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonFavsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonFavsPageRoutingModule {}
