import { Component } from '@angular/core';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input.component';
import { CountryList } from '../../components/country-list/country-list.component';

@Component({
  selector: 'app-by-country',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-country.html'
})
export default class ByCountry {}
