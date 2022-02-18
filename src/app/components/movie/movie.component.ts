import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { GetmoviesService } from 'src/app/services/getmovies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movies: IMovie[] = []

  constructor(private service: GetmoviesService) { }

  ngOnInit(): void {
    this.service.movies$.subscribe((moviesFromApi)=>{

      this.movies = moviesFromApi;
      
    });

    this.service.getMovies("");
  }

}
