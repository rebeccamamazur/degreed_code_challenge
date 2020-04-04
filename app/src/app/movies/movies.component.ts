import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../mock-movies';

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
  movies = MOVIES;

  constructor() { }

  ngOnInit(): void {
  }

}
