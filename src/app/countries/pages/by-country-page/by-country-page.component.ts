import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {
  public countries : Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  constructor(private countriesService:CountriesService){}


  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }


  public searchByCountry = (term:string): void => {
    this.isLoading = true;
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
