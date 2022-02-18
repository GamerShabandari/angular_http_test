import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { IMovie } from 'src/app/models/IMovie';
import { GetmoviesService } from 'src/app/services/getmovies.service';

@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.scss']
})
export class SearchmoviesComponent implements OnInit {

  searchTerm = new Subject<string>();
  movies: Observable<IMovie[]> = new Observable();


  

  constructor(private service:GetmoviesService) { }

  ngOnInit(): void {

    this.movies = this.searchTerm.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((textToSearchFor) => {
        return this.service.searchMovie(textToSearchFor);
      })

    );
    
  }

  search(textFromUser:string){

    this.searchTerm.next(textFromUser);

  }

  searchForMovie(usersSearch:string){
    console.log(usersSearch);
    this.service.getMovies(usersSearch);
    
  }

}
