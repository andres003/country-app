import { Routes } from "@angular/router";
import { HomePage } from "../shared/pages/home-page/home-page.component";
import { ByCapital } from "./Pages/by-capital/by-capital.component";
import { CountryLayout } from "./layout/country-layout/country-layout.component";
import { CountryPage } from "./Pages/country-page/country-page.component";

export const Countryroutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapital
      },
      {
        path: 'by-country',
        loadComponent: () => import('./Pages/by-country/by-country.component')
      },
      {
        path: 'by-region',
        loadComponent: () => import('./Pages/by-region/by-region.component')
      },
      {
        path: 'by/:code',
        component: CountryPage
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
    //component: HomePage
  },
  // {
  //   path: 'country',

  // },
  // {
  //   path: '**',
  //   redirectTo: ''

  // }

];

export default Countryroutes;
