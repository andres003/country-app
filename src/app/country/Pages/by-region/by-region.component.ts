import { Component } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list.component';

@Component({
  selector: 'app-by-region',
  imports: [CountryList],
  templateUrl: './by-region.html'
})
export default class ByRegion {}
