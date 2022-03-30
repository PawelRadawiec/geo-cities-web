export interface CitiesFilters {
  namePrefix: string;
  location: string;
  countryIds: string;
  countryIdsArray: string[];
  excludedCountryIds: string;
  excludedCountryIdsArray: string[];
  minPopulation: number;
  sort: string;
  timezone: string;
  limit: string;
}
