import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-bycountry-page',
  templateUrl: './bycountry-page.component.html',
  styles: ``,
})
export class BycountryPageComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}
  public countries: Country[] = [];
  public initialValue: string = '';
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
