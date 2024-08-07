import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { BycountryPageComponent } from './pages/bycountry-page/bycountry-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { AllContriesComponent } from './pages/all-contries/all-contries.component'; // Import the AllContriesComponent

const routes: Routes = [
  { path: 'by-capital', component: ByCapitalPageComponent },
  {
    path: 'by-country',
    component: BycountryPageComponent,
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent,
  },
  {
    path: 'by/:id',
    component: CountryPageComponent,
  },
  {
    path: 'all',
    component: AllContriesComponent,
  },
  {
    path: '**',
    redirectTo: 'by-capital',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
