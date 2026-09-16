import { Routes } from "@angular/router";
import { HomePage } from "../shared/pages/home-page/home-page";
import { ByCapital } from "./Pages/by-capital/by-capital";
import { CountryLayout } from "./layout/country-layout/country-layout";

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
