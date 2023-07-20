import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  title: string;

  @Prop()
  overview: string;

  @Prop()
  posterPath: string;

  @Prop({ default: 0 })
  likes: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
