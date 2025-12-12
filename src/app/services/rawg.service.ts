import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RawgService {

  private apiKey = '8b5d1b961d514d96bfb98ab1289db668';
  private baseUrl = 'https://api.rawg.io/api/games';

  constructor(private http: HttpClient) {}

  getGamesByGenre(genre: string) {
    return this.http.get<any>(`${this.baseUrl}?key=${this.apiKey}&genres=${genre}`);
  }
}
