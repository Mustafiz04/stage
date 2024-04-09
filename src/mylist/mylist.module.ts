import { Module } from '@nestjs/common';
import { MylistService } from './mylist.service';
import { MylistController } from './mylist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schema/User';
import { MovieSchema } from 'src/schema/Movie';
import { TVShowSchema } from 'src/schema/tvshow';

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
