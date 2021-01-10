import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bestelling} from '../models/Bestelling';
import {Fiets} from '../models/Fiets';
@Injectable({
  providedIn: 'root'
})
export class BestellingService {
  backendBaseUrl = 'http://localhost:8050';


  constructor(private http: HttpClient) {}

  loadAllBestellingen(): Observable<Bestelling[]> {
    return this.http.get<Bestelling[]>(`${this.backendBaseUrl}/bestellingen`);
  }

  filterByEmail(email: string): Observable<Bestelling[]> {
    return this.http.get<Bestelling[]>(`${this.backendBaseUrl}/bestellingen/email/${email}`);
  }

  deleteBestelling(leverancierBonNummer: string): Observable<Bestelling> {
    return this.http.delete<Bestelling>(`${this.backendBaseUrl}/bestelling/${leverancierBonNummer}`);
  }

  loadAllFietsen(): Observable<Fiets[]> {
    return this.http.get<Fiets[]>(`${this.backendBaseUrl}/fietsen`);
  }

  createBestelling(bestelling: Bestelling): Observable<Bestelling> {
    return this.http.post<Bestelling>(`${this.backendBaseUrl}/bestellingen`, {
      bestelling
    } );
  }
}
