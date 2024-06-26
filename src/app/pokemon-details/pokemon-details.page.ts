import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {
  public pokemon: any;
  public isFavorite: boolean = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private favoritesService: FavoritesService) {}

  /**
   * Busca os detalhes do Pokémon baseado no parâmetro da rota.
   */
  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.apiService.getPokemonDetails(name).subscribe((details) => {
        this.pokemon = details;
        this.isFavorite = this.favoritesService.isFavorite(this.pokemon);
      },(e) => console.error('Failed to get pokemon details',e.error));
    }else{
      console.error('Pokémon name not exist!')
    }
  }

  /**
   * Adiciona o Pokémon atual aos favoritos.
   */
  addToFavorites() {
    if (this.pokemon) {
      this.favoritesService.addFavorite(this.pokemon);
    }
  }
}
