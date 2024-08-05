import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service'; // Import the CountriesService class

@Component({
  selector: 'all-contries',
  templateUrl: './all-contries.component.html',
  styleUrl: './all-contries.component.css',
})
export class AllContriesComponent implements OnInit {
  public countries: Country[] = [];
  ngOnInit(): void {
    // Add your initialization logic here
    this.countriesService
      .getAllCountries()
      .subscribe((countries: Country[]) => {
        // sort countries by name
        countries = countries.sort((a, b) =>
          a.name.common > b.name.common ? 1 : -1
        );

        this.countries = countries;
      });
  }

  constructor(private countriesService: CountriesService) {} // Fix the error by importing the CountriesService class
}
