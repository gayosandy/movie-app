import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class TowatchlistService {
  
  watchlist!: Movie[];
  watchlistKey = 'watchlist';

  constructor( private toast: NgToastService ) { }

  addToWatchlist(movie: Movie) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');

    const index = watchlist.findIndex((item: Movie) => item.title === movie.title);

    if (index === -1) {
      watchlist.push(movie);
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      this.toast.success({detail: "Added To Watch List", duration: 3000, position: 'topCenter'})
      
    } else {
      watchlist.splice(index, 1);
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      this.toast.warning({detail: "Removed from Watch List", duration: 3000, position: 'topCenter'})
      
    }
  }

  isInWatchlist(movie: Movie): boolean {
    let watchlist = JSON.parse(localStorage.getItem(this.watchlistKey) || '[]');
    return watchlist.some((item: Movie) => item.title === movie.title);
  }
}
