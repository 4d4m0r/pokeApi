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

  constructor(private route: ActivatedRoute, private apiService: ApiService, private favoritesService: FavoritesService) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.apiService.getPokemonDetails(name).subscribe((details) => {
        this.pokemon = details;
        console.log(this.pokemon)
      },(e) => console.error('Failed to get pokemon details',e.error));
    }else{
      console.error('Pokémon name not exist!')
    }
  }

  addToFavorites() {
    if (this.pokemon) {
      this.favoritesService.addFavorite(this.pokemon);
    }
  }
}
