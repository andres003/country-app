import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry, Language } from '../Interfaces/rest-country.interface';
import { map, Observable, catchError, throwError, mergeMap, of, tap, delay } from 'rxjs';
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
        mergeMap(data => {
          if (data.data.objects.length == 0) return throwError(() => new Error("No se encontraron paises con ese query."))
          return of(data);
        }),
        map(restCountries => CountryMapper.mapRestCountryArrayToArray(restCountries.data.objects)),
        catchError(err => {
          return throwError(() => new Error(err))
        })
      );
  }


  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();
    return this.http.get<RESTCountry>(`${API_URL}/names.common?q=${query}`, { headers: this.HEADERS_REQUEST })
      .pipe(
        mergeMap(data => {
          if (data.data.objects.length == 0) return throwError(() => new Error("No se encontraron paises con ese query."))
          return of(data);
        }),
        map(restCountries => CountryMapper.mapRestCountryArrayToArray(restCountries.data.objects)),
        delay(1000),
        catchError(err => {
          return throwError(() => new Error(err))
        })
      );
  }

  searchByCountryAlphaCode(code: string): Observable<Country> {
    return this.http.get<RESTCountry>(`${API_URL}/codes.alpha_2/${code}`, { headers: this.HEADERS_REQUEST })
      .pipe(
        mergeMap(data => {
          if (data.data.objects.length == 0) return throwError(() => new Error("No se encontraron paises con ese codigo."))
          return of(data);
        }),
        map(restCountries => CountryMapper.mapRestCountryArrayToArray(restCountries.data.objects)),
        map(restCountries => restCountries.at(0) as Country),
        catchError(err => {
          return throwError(() => new Error(err))
        })
      );
  }


}
