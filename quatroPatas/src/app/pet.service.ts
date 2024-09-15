import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=';
  private apiKey = 'live_HkeCUqUBY0uOmd8NWfWjQD37vrWnFPipmdgnVWrDWJW0AZC8V3jZgmOoBhxkVaN6';

  constructor(private http: HttpClient) { }

  getPets(): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey,
      'Content-Type': 'application/json',
    });

    return this.http.get(`${this.apiUrl}${this.apiKey}`);
  }
}
