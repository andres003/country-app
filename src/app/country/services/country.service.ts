import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../Interfaces/rest-country.interface';
import { map, Observable } from 'rxjs';
import type { Country } from '../Interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = '/api-countries/v5';


@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private http = inject(HttpClient);

  HEADERS_REQUEST = new HttpHeaders({
    'Authorization': 'Bearer rc_live_dc6d68df1e4a40c2a6fb6ea231525fb1'
  });

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();
    return this.http.get<RESTCountry>(`${API_URL}/capitals?q=${query}`, { headers: this.HEADERS_REQUEST })
      .pipe(
        map(restCountries => CountryMapper.mapRestCountryArrayToArray(restCountries.data.objects))
      );
  }


}
