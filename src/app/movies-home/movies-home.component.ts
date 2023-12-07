import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../model/movie';
import { TowatchlistService } from '../services/towatchlist.service';


@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css'],

})
export class MoviesHomeComponent implements OnInit {

  movies!: Movie[];
  order = false;

  constructor(private moviesService: MoviesService, 
    private watchlistService: TowatchlistService,
  
    ){}

  ngOnInit(){
    this.movies = this.moviesService.getMovies();
  }

  addToWatchlist(movie: Movie) {
    this.watchlistService.addToWatchlist(movie);
  }

  isInWatchlist(movie: Movie): boolean {
    return this.watchlistService.isInWatchlist(movie);
  }
  
  sortByTitle(){
    this.order = !this.order;
    this.movies.sort((movie1, movie2) => {
      const title1 = movie1.title.toLowerCase(); 
      const title2 = movie2.title.toLowerCase(); 
      return (this.order) ? title1.localeCompare(title2) : title2.localeCompare(title1);
    });
}
  sortByDate(){
    this.order = !this.order;
    this.movies.sort((movie1, movie2) => {
      const date1 = new Date(movie1.releasedate);
      const date2 = new Date(movie2.releasedate);
      
      if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        return this.order ? 1 : -1;
      }
      return (this.order) ? date1.getTime() - date2.getTime() : date2.getTime() - date1.getTime();
    })
}
}
