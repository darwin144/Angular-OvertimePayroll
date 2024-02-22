import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetail } from '../Interfaces/movie-detail';

const ApiUrl = environment.apiUrl;
const ApiKey = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);
  constructor() { }

  getMovies(): Observable<MovieDetail>{
    return this.http.get<MovieDetail>(`${ApiUrl}?api_key=${ApiKey}`)
  }
}
