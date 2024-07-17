
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
  public countries : Country[] = [];
  public regions: Region[] = ['Africa','Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  constructor(private countriesServices:CountriesService){}


  public searchByRegion = (term:Region): void => {
    this.selectedRegion = term;
    this.countriesServices.searchRegion(term)
      .subscribe(countries => {
        this.countries = countries;
      });

  }
}
