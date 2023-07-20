import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async getPopularMovies(): Promise<any> {
    try {
      const response = await (await this.moviesService.getPopularMovies()).toPromise();
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch popular movies from TMDB API.');
    }
  }

  @Post(':id/like')
  @UseGuards(JwtAuthGuard)
  likeMovie(@Param('id') id: string): Promise<any> {
    return this.moviesService.likeMovie(id);
  }
}
