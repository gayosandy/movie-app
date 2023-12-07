import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: Movie[] = [
    new Movie (
 
      'Tenet',
      'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
      '7.8',
      '2h 30min',
      'Action, Sci-Fi',
      new Date('09/03/2020'),
      'https://www.youtube.com/embed/LdOM0x0XDMo',
      './assets/Tenet.png'
    ),
    new Movie (

      'Spider-Man: Into the Spider-Verse',
      'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
      '8.4',
      '1h 57min',
      'Action, Animation, Adventure',
      new Date('12/14/2018'),
      'https://www.youtube.com/embed/tg52up16eq0',
      './assets/SpiderMan.png'
    ),
    new Movie (

      'Knives Out',
      'A detective investigates the death of a patriarch of an eccentric, combative family',
      '7.9',
      '2h 10min',
      'Comedy, Crime, Drama',
      new Date('11/27/2019'),
      'https://www.youtube.com/embed/qGqiHJTsRkQ',
      './assets/Knives Out.png'
    ),
    new Movie (

      'Guardians of the Galaxy',
      'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
      '8.0',
      '2h 1min',
      'Action, Adventure, Comedy',
      new Date('08/01/2014'),
      'https://www.youtube.com/embed/d96cjJhvlMA',
      './assets/Guardians of The Galaxy.png'
    ),
    new Movie (
   
      'Age of Ultron',
      'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and its up to Earths mightiest heroes to stop the villainous Ultron from enacting his terrible plan.',
      '7.3',
      '2h 21min',
      'Action, Adventure, Sci-Fi',
      new Date('05/01/2015'),
      'https://www.youtube.com/embed/tmeOjFno6Do',
      './assets/Avengers.png'
    ),
  ]

  constructor() { }

  getMovies(){
    return this.movies.slice();
  }

  getMovie(index: number){
    return this.movies[index];
  }
}
