import { Component, OnInit, Input } from '@angular/core';
import { MOVIEDETAIL } from '../mock-movie-detail';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  // Get id from parent component
  @Input() imdbID: string;

  movie = MOVIEDETAIL;

  constructor() { }

  ngOnInit(): void {
  }

}
