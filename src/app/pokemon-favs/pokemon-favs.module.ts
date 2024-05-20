import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonFavsPageRoutingModule } from './pokemon-favs-routing.module';

import { PokemonFavsPage } from './pokemon-favs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonFavsPageRoutingModule
  ],
  declarations: [PokemonFavsPage]
})
export class PokemonFavsPageModule {}
