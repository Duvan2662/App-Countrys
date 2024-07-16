import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }


  public searchCountryByAlphaCode(code: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }

  public searchCapital = (term: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/capital/${term}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError( error => of([]))

      );
  }


  public searchCountry = (term: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( error => of([]))
      );
  }


  public searchRegion = (term: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/region/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([]))
    );
  }

}
