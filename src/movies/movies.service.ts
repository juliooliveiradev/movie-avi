import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from './movie.schema';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { title } from 'process';

@Injectable()
export class MoviesService {

  private apiKey = '22a5a37600bdb2e74d7e42d7f5b97cea';
  private apiUrl = 'https://api.themoviedb.org/3';
  httpService: any;

  constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>) {}

  async getPopularMovies(): Promise<Observable<AxiosResponse<any, any>>> {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR&page=1&region=BR`;
    return this.httpService.get(url);
  }

  async likeMovie(id: string): Promise<Movie> {
    
    const existingMovie = await this.movieModel.findById(title);

    if (!existingMovie) {
      
      const newMovie = new this.movieModel({ _id: title, likes: 1 });
      return newMovie.save();
    }

   
    existingMovie.likes++;
    return existingMovie.save();
  
  }
}
