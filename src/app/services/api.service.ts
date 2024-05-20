import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = api

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(`${this.api}`);
  }

  getPokemonDetails(pokemonName: string): Observable<any> {
    return this.http.get(`${this.api}/${pokemonName}`);
  }
}
