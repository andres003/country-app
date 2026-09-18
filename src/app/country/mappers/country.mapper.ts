import type { CountryData } from '../Interfaces/rest-country.interface';
import type { Country } from '../Interfaces/country.interface';


export class CountryMapper {

  static mapRestCountryToCountry(countryData: CountryData): Country {
    const country: Country = {
      uuid: countryData.uuid,
      svg: countryData.flag.url_svg,
      name: countryData.names.common,
      capital: countryData.capitals[0].name,
      population: countryData.population
    };
    return country;
  }

  static mapRestCountryArrayToArray(CountryData: CountryData[]): Country[] {
    return CountryData.map(this.mapRestCountryToCountry);
  }


}
