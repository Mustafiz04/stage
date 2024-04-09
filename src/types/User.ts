import { Genre } from './Genre';
import { Movie } from './Movie';
import { TVShow } from './TVShow';

export interface User {
  id: string;
  username: string;
  preferences: {
    favoriteGenres: Genre[];
    dislikedGenres: Genre[];
  };
  watchHistory: Array<{
    contentId: string;
    watchedOn: Date;
    rating?: number;
  }>;
  MyList: Array<Movie | TVShow>;
}
