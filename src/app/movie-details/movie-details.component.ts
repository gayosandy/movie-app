import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../model/movie';
import { ActivatedRoute, Params } from '@angular/router';
import { TowatchlistService } from '../services/towatchlist.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetail!: Movie;
  id!: number;

  constructor(private movieService: MoviesService, 
    private route: ActivatedRoute, private watchlist: TowatchlistService){

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.movieDetail = this.movieService.getMovie(this.id);
     console.log()
    });
  }

  addToWatchlist(movieDetail: Movie){
    this.watchlist.addToWatchlist(movieDetail);
  }

  isInWatchlist(movieDetail: Movie): boolean {
    return this.watchlist.isInWatchlist(movieDetail);
  }
}
