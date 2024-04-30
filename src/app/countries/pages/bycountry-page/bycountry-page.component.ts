import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-bycountry-page',
  templateUrl: './bycountry-page.component.html',
  styles: ``,
})
export class BycountryPageComponent {
  constructor(private countriesService: CountriesService) {}

  public countries: Country[] = [];
  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
