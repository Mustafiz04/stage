import { Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsDate,
  IsNumber,
} from 'class-validator';
import { Movie } from 'src/schema/Movie';
import { TVShow } from 'src/schema/tvshow';

export class PreferencesDto {
  @IsArray()
  @IsString({ each: true })
  favoriteGenres: string[];

  @IsArray()
  @IsString({ each: true })
  dislikedGenres: string[];
}

export class WatchedItemDto {
  @IsString()
  contentId: string;

  @IsDate()
  watchedOn: Date;

  @IsNumber()
  rating: number;
}

export class MyListItemDto {
  @IsString()
  type: 'movie' | 'tvshow';

  @IsString()
  contentId: Movie | TVShow;
}

export class UserDto {
  @IsString()
  username: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PreferencesDto)
  preferences?: PreferencesDto;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => WatchedItemDto)
  watchHistory?: WatchedItemDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => MyListItemDto)
  myList?: MyListItemDto[];
}
