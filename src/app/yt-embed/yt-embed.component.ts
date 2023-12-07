import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-yt-embed',
  templateUrl: './yt-embed.component.html',
  styleUrls: ['./yt-embed.component.css']
})
export class YtEmbedComponent implements OnInit {
  movieDetail!: Movie;
  id!: number;
    constructor(private route: ActivatedRoute, private movieService: MoviesService){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.movieDetail = this.movieService.getMovie(this.id);
     console.log()
    });
  }
}
