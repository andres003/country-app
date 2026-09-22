import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input.component';
import { CountryList } from '../../components/country-list/country-list.component';
import { firstValueFrom } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-country.html'
})
export default class ByCountry {
countryService = inject(CountryService);
  query = signal('');

  countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async ({ params }) => {
      if (!params.query) return [];
      return await firstValueFrom(
        this.countryService.searchByCountry(params.query)
      );
    }
  });



}
