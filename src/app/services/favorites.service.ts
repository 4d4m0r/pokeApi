import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites: any[] = [];

  constructor(private apiService: ApiService) { }

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
  

  addFavorite(pokemon: any) {
    if (!this.isFavorite(pokemon)) {
      this.favorites.push(pokemon);
    }
  }

  isFavorite(pokemon: any): boolean {
    return this.favorites.some(favorite => favorite.name === pokemon.name);
  }
}
