import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/environments/environment';

/**
 * Serviço para interação com a API de Pokémon.
 *
 * Este serviço fornece métodos para buscar a lista de Pokémon e os detalhes de um Pokémon específico.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api: string = api;

  constructor(private http: HttpClient) {}

  /**
   * Busca a lista de Pokémon da API.
   * @returns {Observable<any>} Um Observable com a resposta da requisição HTTP.
   */
  getPokemons() {
    return this.http.get(`${this.api}`);
  }

  /**
   * Busca os detalhes de um Pokémon específico da API.
   * @param {string} pokemonName - O nome do Pokémon para buscar detalhes.
   * @returns {Observable<any>} Um Observable com a resposta da requisição HTTP.
   */
  getPokemonDetails(pokemonName: string): Observable<any> {
    return this.http.get(`${this.api}/${pokemonName}`);
  }
}
