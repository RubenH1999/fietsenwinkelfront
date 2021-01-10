import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Klant} from '../models/Klant';
import {Bestelling} from '../models/Bestelling';
import {createHttpParams} from '../shared/http-params-creator';

@Injectable({
  providedIn: 'root'
})
export class KlantService {

  backendBaseUrl = 'http://localhost:8050';


  constructor(private http: HttpClient) {}

  getKlantByKlantnummer(klantnummer: string): Observable<Klant> {

    return this.http.get<Klant>(`${this.backendBaseUrl}/klanten/klantnummer/${klantnummer}`);
  }
}
