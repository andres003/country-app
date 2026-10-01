import { Component, input } from '@angular/core';
import { Country } from '../../../Interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.html'
})
export class CountryInformation {

  country = input.required<Country>();

}
