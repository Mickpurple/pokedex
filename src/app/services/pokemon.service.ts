import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(offset): Observable<any> {
    return this.http.get(`${environment.baseUrl}/pokemon?offset=${offset}`);
  }

  getPokemonDetail(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/pokemon/${id}`);
  }
}
