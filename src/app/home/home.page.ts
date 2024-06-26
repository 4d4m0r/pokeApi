import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public pokemons: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  /**
   * Busca a lista de Pokémon e detalhes de cada Pokémon.
   *
   * Este método utiliza o ApiService para buscar a lista de Pokémon,
   * e em seguida, para cada Pokémon na lista, busca os detalhes e
   * adiciona à propriedade `pokemons`.
   */
  getPokemons() {
    this.apiService.getPokemons().subscribe(
      (data: any) => {
        const results = data.results;

        results.forEach((result: any) => {
          this.apiService.getPokemonDetails(result.name).subscribe(
            (details: any) => {
              const pokemon = {
                name: result.name,
                image: details.sprites.front_default,
              };
              this.pokemons.push(pokemon);
            },
            (e) => console.log(e.error)
          );
        });
      },
      (e) => console.log(e.error)
    );
  }
}
