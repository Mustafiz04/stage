import { Module } from '@nestjs/common';
import { MylistService } from './mylist.service';
import { MylistController } from './mylist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schema/User';
import { MovieSchema } from '../schema/Movie';
import { TVShowSchema } from '../schema/tvshow';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
      {
        name: 'Movie',
        schema: MovieSchema,
      },
      {
        name: 'TVShow',
        schema: TVShowSchema,
      },
    ]),
  ],
  controllers: [MylistController],
  providers: [MylistService],
})
export class MylistModule {}
