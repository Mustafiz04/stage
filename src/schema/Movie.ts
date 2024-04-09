import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Document & Movie;

@Schema()
export class Movie {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop([String])
  genres: string[];

  @Prop()
  releaseDate: Date;

  @Prop()
  director: string;

  @Prop([String])
  actors: string[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
