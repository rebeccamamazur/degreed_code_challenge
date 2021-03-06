import { Component, OnInit, Input } from '@angular/core';
import { DateFilterService } from '../date-filter.service';
import { Movie } from '../movie';
import { MovieSearchResponse } from '../movie-search-response';
import { MoviesService } from '../movies.service';
import { Observable, Subscription } from 'rxjs';

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
  @Input() movies: Movie[];
  @Input() currentDateFilter: string;
  totalResults: string;
  decades: string[];
  filteredMovies: Movie[];
  subscription: Subscription;

  constructor(
    private moviesService: MoviesService,
    private dateFilterService: DateFilterService) {
      /* listen for changes on the dateFilterService */
      this.subscription = this.dateFilterService
        .getDate()
        .subscribe(date => {
          this.currentDateFilter = date;
          /* This doesn't feel like the right spot to do this... need to figure out why ngOnChanges isn't triggering */
          this.filteredMovies = this.fiterMovies();
        });
      }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.filteredMovies = this.fiterMovies()
  }

  /**
    * fiterMovies
    * utility function to trim list of movies by decade or reset
    * to full list as appropriate
    */
  fiterMovies(): Movie[] {
    if (!this.currentDateFilter) {
      return this.movies;
    }
    return this.movies.filter((m) => {
      return m.Year.slice(0, 3) == this.currentDateFilter.slice(0, 3);
    });
  }
}
