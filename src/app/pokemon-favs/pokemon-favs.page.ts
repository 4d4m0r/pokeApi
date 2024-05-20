import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-pokemon-favs',
  templateUrl: './pokemon-favs.page.html',
  styleUrls: ['./pokemon-favs.page.scss'],
})
export class PokemonFavsPage implements OnInit {

  public pokemons: any[] = [];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.pokemons = this.favoritesService.getFavorites();
  }

}
