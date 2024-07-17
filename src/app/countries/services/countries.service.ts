import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: {
      term:'',
      countries: []
    },
    byCountries: {
      term:'',
      countries: []
    },
    byRegion: {
      term:'',
      countries: []
    }


  }


  constructor(private http:HttpClient) {
   }

  private getCountriesRequest = (url: string):Observable<Country[]> => {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([])),
        // delay(1000),
      );
  }


  public searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get< Country[] >(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0]: null),
        catchError(error => of(null))
      );
  }

  public searchCapital = (term: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/capital/${term}`;

    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCapital = {term,countries} )
      );
  }


  public searchCountry = (term: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCountries = {term,countries})
    );
  }


  public searchRegion = (term: Region): Observable<Country[]> => {
    const url = `${this.apiUrl}/region/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byRegion = {term,countries})
    );
  }

}
