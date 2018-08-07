
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private barApiPath = "https://api.themoviedb.org/3"

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(page = 1) {
    return this.http.get(this.barApiPath + `/movie/popular?page=${page}&api_key=c882e266c4f519e33931b3e60f71fb93`);
  }

  getMovieDetails(movieId) {
    return this.http.get(this.barApiPath + `/movie/${movieId}?api_key=c882e266c4f519e33931b3e60f71fb93`);
  }

}
