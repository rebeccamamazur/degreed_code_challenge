import { Component, OnInit, Input } from '@angular/core';
import { MovieDetail } from '../movie-detail';
import { MoviesService } from '../movies.service';
import { DateFilterService } from '../date-filter.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  // Get id from parent component
  @Input() imdbID: string;

  movie: MovieDetail;
  trimmedImgSrc: string;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovie(this.imdbID);
  }

  getMovie(id: string): void {
    this.moviesService.getMovieDetail(this.imdbID).subscribe(movie => {
      this.movie = movie;
      let splitSrc =  movie.Poster.split('/');
      this.trimmedImgSrc = splitSrc.length < 1 ? '': 'assets/' + splitSrc[splitSrc.length - 1];
    });
  }

}
