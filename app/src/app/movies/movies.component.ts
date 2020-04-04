import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieSearchResponse } from '../movie-search-response';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

/**
 * MoviesComponent
 * Manages the movie listing
 */
export class MoviesComponent implements OnInit {
  totalResults: string;
  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies().subscribe(movies => {
      this.totalResults = movies.totalResults;
      this.movies = movies.Search;
    });
  }
}
