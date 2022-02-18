import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { IMovie } from '../models/IMovie';
import { IOmdbResponse } from '../models/IOmdbResponse';

@Injectable({
  providedIn: 'root'
})
export class GetmoviesService {

  private movies = new Subject<IMovie[]>();
  movies$ = this.movies.asObservable();

  constructor(private http: HttpClient) { }

  getMovies(usersSearch:string){
    this.http.get<IOmdbResponse>("https://www.omdbapi.com/?i=tt3896198&apikey=5ed1c386&s="+usersSearch).subscribe((apiResponse:IOmdbResponse) => {
      this.movies.next(apiResponse.Search);
    })
  }

  searchMovie(searchTerm:string): Observable<IMovie[]>{
    return this.http.get<IOmdbResponse>("https://www.omdbapi.com/?i=tt3896198&apikey=5ed1c386&s="+searchTerm)
    .pipe(map((data) => data.Search));
  }

}
