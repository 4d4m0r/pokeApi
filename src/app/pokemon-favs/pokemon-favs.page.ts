import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-pokemon-favs',
  templateUrl: './pokemon-favs.page.html',
  styleUrls: ['./pokemon-favs.page.scss'],
})
export class PokemonFavsPage implements OnInit {

  public pokemons: any[] = [];

  /**
   * Cria uma instância do PokemonFavsPage.
   * @param {FavoritesService} favoritesService - Serviço para gerenciar Pokémon favoritos.
   */
  constructor(private favoritesService: FavoritesService) { }

  /**
   * Busca a lista de Pokémon favoritos do serviço de favoritos.
   */
  ngOnInit() {
    this.pokemons = this.favoritesService.getFavorites();
  }

}
