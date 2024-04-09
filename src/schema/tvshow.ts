import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TVShowDocument = Document & TVShow;

@Schema()
export class TVShow {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop([String])
  genres: string[];

  @Prop([
    {
      episodeNumber: Number,
      seasonNumber: Number,
      releaseDate: Date,
      director: String,
      actors: [String],
    },
  ])
  episodes: Array<{
    episodeNumber: number;
    seasonNumber: number;
    releaseDate: Date;
    director: string;
    actors: string[];
  }>;
}

export const TVShowSchema = SchemaFactory.createForClass(TVShow);
