import { Component, input } from '@angular/core';
import { Country } from '../../Interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.html'
})
export class CountryList {
  countries = input.required<Country[]>();

  errorMessage = input<unknown>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);


}
