import { City } from './city.model';

export interface SearchCitiesResponse {
  data: City[];
  links: Link[];
  metadata: Metadata;
}

export interface Link {
  href: string;
  ref: string;
}

export interface Metadata {
  totalCount: number;
  offset: number;
}
