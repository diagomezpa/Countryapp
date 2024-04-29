import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { BycountryPageComponent } from './pages/bycountry-page/bycountry-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    BycountryPageComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, SharedModule],
})
export class CountriesModule {}
