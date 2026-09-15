import { Routes } from "@angular/router";
import { HomePage } from "../shared/pages/home-page/home-page";
import { ByCapital } from "./Pages/by-capital/by-capital";

export const Countryroutes: Routes = [
  {
    path: '',
    component: ByCapital
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
