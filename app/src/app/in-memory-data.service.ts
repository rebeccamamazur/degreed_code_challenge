/* Mock API service to conserve omdbapi calls while building out */
/* This code is essentially unchanged from the Angular getting started tutorial */
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = {
    	Search: [{
    		Title: "Batman Begins",
    		Year: "2005",
    		$1: "tt0372784",
    		Type: "movie",
    		Poster: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
    	}, {
    		Title: "Batman v Superman: Dawn of Justice",
    		Year: "2016",
    		$1: "tt2975590",
    		Type: "movie",
    		Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    	}, {
    		Title: "Batman",
    		Year: "1989",
    		$1: "tt0096895",
    		Type: "movie",
    		Poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
    	}, {
    		Title: "Batman Returns",
    		Year: "1992",
    		$1: "tt0103776",
    		Type: "movie",
    		Poster: "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
    	}, {
    		Title: "Batman Forever",
    		Year: "1995",
    		$1: "tt0112462",
    		Type: "movie",
    		Poster: "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    	}, {
    		Title: "Batman & Robin",
    		Year: "1997",
    		$1: "tt0118688",
    		Type: "movie",
    		Poster: "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
    	}, {
    		Title: "The Lego Batman Movie",
    		Year: "2017",
    		$1: "tt4116284",
    		Type: "movie",
    		Poster: "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
    	}, {
    		Title: "Batman: The Animated Series",
    		Year: "1992–1995",
    		$1: "tt0103359",
    		Type: "series",
    		Poster: "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
    	}, {
    		Title: "Batman: Under the Red Hood",
    		Year: "2010",
    		$1: "tt1569923",
    		Type: "movie",
    		Poster: "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    	}, {
    		Title: "Batman: The Dark Knight Returns, Part 1",
    		Year: "2012",
    		$1: "tt2313197",
    		Type: "movie",
    		Poster: "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
    	}],
    	totalResults: "373",
    	Response: "True"
    };
    const movie = {
    	Title: "Batman Begins",
    	Year: "2005",
    	Rated: "PG-13",
    	Released: "15 Jun 2005",
    	Runtime: "140 min",
    	Genre: "Action, Adventure",
    	Director: "Christopher Nolan",
    	Writer: "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    	Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    	Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    	Language: "English, Mandarin",
    	Country: "USA, UK",
    	Awards: "Nominated for 1 Oscar. Another 14 wins & 72 nominations.",
    	Poster: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    	Ratings: [{
    		Source: "Internet Movie Database",
    		Value: "8.2/10"
    	}, {
    		Source: "Rotten Tomatoes",
    		Value: "84%"
    	}, {
    		Source: "Metacritic",
    		Value: "70/100"
    	}],
    	Metascore: "70",
    	imdbRating: "8.2",
    	imdbVotes: "1,245,995",
    	imdbID: "tt0372784",
    	Type: "movie",
    	DVD: "18 Oct 2005",
    	BoxOffice: "$204,100,000",
    	Production: "Warner Bros. Pictures",
    	Website: "N/A",
    	Response: "True"
    };
    return { movies, movie };
  }
}
