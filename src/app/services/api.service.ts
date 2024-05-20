import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = api

  constructor(private http: HttpClient) { }
}
