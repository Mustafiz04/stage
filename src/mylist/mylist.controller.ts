import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { MylistService } from './mylist.service';
import { User } from 'src/schema/User';
import { UserDto } from './dto/user.dto';
import { Movie } from 'src/schema/Movie';

@Controller('mylist')
export class MylistController {
  constructor(private readonly myListService: MylistService) {}

  @Get('/seed')
  async seedData() {
    try {
      return await this.myListService.seedData();
    } catch (error) {
      throw new HttpException(
        { error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async getAllUser(): Promise<User[]> {
    try {
      const users = await this.myListService.findAll();
      return users;
    } catch (error) {
      throw new HttpException(
        { error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  async create(@Body() user: UserDto): Promise<User> {
    try {
      return await this.myListService.create(user);
    } catch (error) {
      throw new HttpException(
        { error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('movie')
  async createMovie(@Body() movie): Promise<Movie> {
    try {
      return await this.myListService.createMovie(movie);
    } catch (error) {
      throw new HttpException(
        { error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post(':userId/:itemId/:itemType')
  async addToMyList(
    @Param('userId') userId: string,
    @Param('itemId') itemId: string,
    @Param('itemType') itemType: 'movie' | 'tvshow',
  ) {
    try {
      await this.myListService.addToMyList(userId, itemId, itemType);
      return { message: 'Item added to My List successfully' };
    } catch (error) {
      throw new HttpException(
        { error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post(':userId/:itemId/:itemType/remove')
  async removeFromMyList(
    @Param('userId') userId: string,
    @Param('itemId') itemId: string,
    @Param('itemType') itemType: 'movie' | 'tvshow',
  ) {
    try {
      await this.myListService.removeFromMyList(userId, itemId, itemType);
      return { message: 'Item removed from My List successfully' };
    } catch (error) {
      throw new HttpException(
        { error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':userId')
  async getUserMyList(
    @Param('userId') userId: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    try {
      const { data, total } = await this.myListService.getUserMyList(
        userId,
        page,
        limit,
      );
      return {
        data,
        total,
        page,
        limit,
      };
    } catch (error) {
      throw new HttpException(
        { error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
