import { Component, inject, signal } from '@angular/core';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input.component';
import { CountryList } from '../../components/country-list/country-list.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../Interfaces/country.interface';


@Component({
  selector: 'app-by-capital',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-capital.html'
})
export class ByCapital {

  countryService = inject(CountryService);
  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);


  search(query: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query)
      .subscribe((countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      });
  }


}
