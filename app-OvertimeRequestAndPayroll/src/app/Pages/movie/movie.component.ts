import { Component, inject, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { MovieService } from '../../Services/movie.service';
import { MovieDetail } from '../../Interfaces/movie-detail';
import { HttpClientModule } from '@angular/common/http';

const imgUrl = environment.imgUrl;

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{

  private movieService = inject(MovieService);
  constructor(){}
  
  movies: any[] = [];

  ngOnInit(): void {
   this.loadMovies(); 
  }

  loadMovies(){
    return this.movieService.getMovies().subscribe(
      {
        next : (rest:any) => {
          this.movies = rest.results as MovieDetail[];
          console.log(rest.results);
        },
        error: (error:any) => console.log("Error fetching movie",error)
      });
  }

  GetFullImageUrl(posterPath:string):string{
    return imgUrl + posterPath;
  }

}
