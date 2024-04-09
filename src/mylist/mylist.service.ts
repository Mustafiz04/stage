import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../schema/User';
import { Movie } from '../schema/Movie';
import { TVShow } from '../schema/tvshow';
import { UserDto } from './dto/user.dto';
import UserData from '../data/users';
import moviesData from '../data/movie';
import tvShowData from '../data/tvshows';

@Injectable()
export class MylistService {
  constructor(
    @InjectModel('User') private userModel: mongoose.Model<User>,
    @InjectModel('Movie') private movieModel: mongoose.Model<Movie>,
    @InjectModel('TVShow') private tvShowModel: mongoose.Model<TVShow>,
  ) {}

  async seedData() {
    const user = await this.userModel.create(UserData);
    const movie = await this.movieModel.create(moviesData);
    const tvShow = await this.tvShowModel.create(tvShowData);
    return {
      user,
      movie,
      tvShow,
    };
  }

  async preload(): Promise<void> {
    await this.seedData();
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    if (!users) {
      throw new NotFoundException('Users not found');
    }
    return users;
  }

  async create(user: UserDto): Promise<User> {
    const res = await this.userModel.create(user);
    if (!res) {
      throw new NotFoundException('User not created');
    }
    return res;
  }

  public async createMovie(movie): Promise<Movie> {
    const createdMovie = await this.movieModel.create(movie);
    if (!createdMovie) {
      throw new NotFoundException('Movie not created');
    }
    return createdMovie.save();
  }

  public async addToMyList(
    userId: string,
    itemId: string,
    itemType: 'movie' | 'tvshow',
  ): Promise<void> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const update = {
      $addToSet: {
        myList: {
          type: itemType,
          contentId: itemId,
        },
      },
    };
    await this.userModel.updateOne({ _id: userId }, update);
  }

  public async removeFromMyList(
    userId: string,
    itemId: string,
    itemType: 'movie' | 'tvshow',
  ): Promise<void> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const update = {
      $pull: {
        myList: { contentId: itemId, type: itemType },
      },
    };
    await this.userModel.updateOne({ _id: userId }, update);
  }

  public async getUserMyList(
    userId: string,
    page: number,
    limit: number,
  ): Promise<{ data: (Movie | TVShow)[]; total: number }> {
    const user = await this.userModel.findById(userId).lean();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const total = user.myList.length;
    const paginatedData = user.myList.slice((page - 1) * limit, page * limit);
    const data: (Movie | TVShow)[] = [];
    for (const item of paginatedData) {
      if (item.type === 'movie') {
        const movie = await this.movieModel.findById(item.contentId).lean();
        if (!movie) {
          throw new NotFoundException('Movie not found');
        }
        data.push(movie);
      } else {
        const tvShow = await this.tvShowModel.findById(item.contentId).lean();
        if (!tvShow) {
          throw new NotFoundException('TVShow not found');
        }
        data.push(tvShow);
      }
    }

    return {
      data,
      total,
    };
  }
}
