import { HttpModule } from "@nestjs/axios";
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController,MoviesController],
  providers: [AppService,MoviesService],
})
export class AppModule {}
