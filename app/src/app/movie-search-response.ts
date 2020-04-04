import { Movie } from './movie';

/**
* MovieSearchResponse interface
* Provides the data shape of a full movie search response value
*/
export interface MovieSearchResponse {
  Search: Array<Movie>;
  totalResults: string;
  Response: string;
}
