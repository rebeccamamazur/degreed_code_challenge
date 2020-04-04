/**
 * Mock movie data to preserve API limits while building out the demo
 */
// Pull in movie shape from interface definition
import { Movie } from './movie';

export const MOVIES: Movie[] = [
  {
		Title: "Batman Begins",
		Year: "2005",
		imdbID: "tt0372784",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
	}, {
		Title: "Batman v Superman: Dawn of Justice",
		Year: "2016",
		imdbID: "tt2975590",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
	}
];
