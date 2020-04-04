import { Component } from '@angular/core';
import { Movie } from './movie';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  totalResults: string;
  movies: Movie[];
  decades: string[];
  currentDateFilter = '';

  constructor(
    private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  /* Moved this from MoviesComponent because the movie list information was
   * needed in multiple locations and it didn't make sense to pass it
   * around through Subscriptions in this specific implementation.
   * Might not be the case if we wanted to offload fiters to the backend.
   */
  getMovies(): void {
    this.moviesService.getMovies().subscribe(movies => {
      this.totalResults = movies.totalResults;
      this.movies = movies.Search.sort((m1, m2) => parseInt((m2.Year), 10) - parseInt((m1.Year), 10));
      this.decades = movies.Search.reduce((accum, m) => {
        if (!accum.includes(m.Year.slice(0, 3) + "0")) {
          accum.push(m.Year.slice(0, 3) + "0");
        }
        return accum;
      }, []).sort((a, b) => b - a);
    });
  }
}
