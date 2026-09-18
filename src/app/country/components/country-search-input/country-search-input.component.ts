import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
})
export class CountrySearchInput {

  placeholder = input<string>('Buscar');
  value = output<string>();

  // onSearch(value:string){
  //   this.value.emit(value);
  //   console.log(value);
  // }

}
