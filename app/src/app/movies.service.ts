import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { MovieSearchResponse } from './movie-search-response';
import { MovieDetail } from './movie-detail';
import { MOVIES } from './mock-movies';

@Injectable({
  providedIn: 'root'
})
/**
 * MoviesService
 * Service to call for movie data from API
 */
export class MoviesService {
  private apiUrl = 'http://www.omdbapi.com/?apikey=d57fdb10';

  constructor(private http: HttpClient) { }

  /* return an Observable here so that the calling component will wait for returned info */
  getMovies(): Observable<MovieSearchResponse> {
    return this.http.get<MovieSearchResponse>(`${this.apiUrl}&s=Batman`);
  }

  getMovieDetail(id: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.apiUrl}&i=${id}`);
  }
}
