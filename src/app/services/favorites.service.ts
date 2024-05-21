import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

/**
 * Serviço para gerenciar Pokémon favoritos.
 *
 * Este serviço fornece métodos para obter a lista de Pokémon favoritos,
 * adicionar um Pokémon aos favoritos e verificar se um Pokémon é favorito.
 */
@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites: any[] = [];

  constructor(private apiService: ApiService) { }

  /**
   * Obtém a lista de Pokémon favoritos e seus detalhes.
   * @returns {any[]} A lista de Pokémon favoritos.
   */
  getFavorites() {
    let favorites: any[] = [];
    const results = this.favorites;
    
    results.forEach((result: any) => {
      this.apiService.getPokemonDetails(result.name).subscribe((details:any) => {
        console.log(details);
        const pokemon = {
          name:result.name,
          image: details.sprites.front_default
        };
        favorites.push(pokemon);
      }, (e) => console.log(e.error))
    });
  
    return favorites;
  }
  

  /**
   * Adiciona um Pokémon aos favoritos.
   * @param {any} pokemon - O Pokémon a ser adicionado aos favoritos.
   */
  addFavorite(pokemon: any) {
    if (!this.isFavorite(pokemon)) {
      this.favorites.push(pokemon);
    }
  }

  /**
   * Verifica se um Pokémon é favorito.
   * @param {any} pokemon - O Pokémon a ser verificado.
   * @returns {boolean} true se o Pokémon é favorito, false caso contrário.
   */
  isFavorite(pokemon: any): boolean {
    return this.favorites.some(favorite => favorite.name === pokemon.name);
  }
}
