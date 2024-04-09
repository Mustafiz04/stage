import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = Document & {
  username: string;
  preferences: {
    favoriteGenres: string[];
    dislikedGenres: string[];
  };
  watchHistory: Array<{
    contentId: string;
    watchedOn: Date;
    rating: number;
  }>;
  myList: Array<{
    type: 'movie' | 'tvshow';
    contentId: string;
  }>;
};

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop({ type: JSON, required: true, unique: true })
  preferences: {
    favoriteGenres: string[];
    dislikedGenres: string[];
  };

  @Prop()
  watchHistory: Array<{
    contentId: string;
    watchedOn: Date;
    rating: number;
  }>;

  @Prop()
  myList: Array<{
    type: string;
    contentId: string;
  }>;
}

export const UserSchema = SchemaFactory.createForClass(User);
