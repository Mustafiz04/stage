import { Test } from '@nestjs/testing';
import { MylistController } from './mylist.controller';
import { MylistService } from './mylist.service';

describe('CatsController', () => {
  let mylistController: MylistController;
  let mylistService: MylistService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [MylistController],
      providers: [MylistService],
    }).compile();

    mylistService = moduleRef.get<MylistService>(MylistService);
    mylistController = moduleRef.get<MylistController>(MylistController);
  });

  it('should seed data', async () => {
    jest.spyOn(mylistService, 'seedData').mockResolvedValue(undefined);
    expect(await mylistController.seedData()).toBeUndefined();
    expect(mylistService.seedData).toHaveBeenCalled();
  });

  it('should add to mylist', async () => {
    const userId = '123';
    const itemId = '456';
    const itemType = 'movie';

    jest.spyOn(mylistService, 'addToMyList').mockResolvedValue(undefined);
    expect(
      await mylistController.addToMyList(userId, itemId, itemType),
    ).toBeUndefined();
    expect(mylistService.addToMyList).toHaveBeenCalledWith(
      userId,
      itemId,
      itemType,
    );
  });

  it('should remove from mylist', async () => {
    const userId = '123';
    const itemId = '456';
    const itemType = 'movie';

    jest.spyOn(mylistService, 'removeFromMyList').mockResolvedValue(undefined);
    expect(
      await mylistController.removeFromMyList(userId, itemId, itemType),
    ).toBeUndefined();
    expect(mylistService.removeFromMyList).toHaveBeenCalledWith(
      userId,
      itemId,
      itemType,
    );
  });

  it('should get user mylist', async () => {
    const userId = '123';
    const page = 1;
    const limit = 10;

    const data: any = [
      {
        _id: '66150dc02f4c226c74c113f2',
        title: 'asdf',
        description: '1wdsgrfed',
        genres: ['Action'],
        releaseDate: '2024-01-20T00:00:00.000Z',
        director: '',
        actors: [''],
        __v: 0,
      },
      {
        _id: '66152134a9cce40b59f5887b',
        title: 'Breaking Bad',
        description:
          'A high school chemistry teacher turns to cooking and drug trafficking after he is diagnosed with lung cancer.',
        genres: ['drama', 'thriller'],
        episodes: [
          {
            episodeNumber: 1,
            seasonNumber: 1,
            releaseDate: '2008-07-07T00:00:00.000Z',
            director: 'Vince Gilligan',
            actors: [' Bryan Cranston', ' Aaron Paul'],
            _id: '66152134a9cce40b59f5887c',
          },
          {
            episodeNumber: 10,
            seasonNumber: 1,
            releaseDate: '2008-07-14T00:00:00.000Z',
            director: 'Vince Gilligan',
            actors: [' Bryan Cranston', ' Aaron Paul'],
            _id: '66152134a9cce40b59f5887d',
          },
          {
            episodeNumber: 15,
            seasonNumber: 2,
            releaseDate: '2009-01-11T00:00:00.000Z',
            director: 'Vince Gilligan',
            actors: [' Bryan Cranston', ' Aaron Paul'],
            _id: '66152134a9cce40b59f5887e',
          },
        ],
        __v: 0,
      },
    ];
    const total = 1;

    jest
      .spyOn(mylistService, 'getUserMyList')
      .mockResolvedValue({ data, total });
    expect(await mylistController.getUserMyList(userId, page, limit)).toEqual({
      data,
      total,
      page,
      limit,
    });
    expect(mylistService.getUserMyList).toHaveBeenCalledWith(
      userId,
      page,
      limit,
    );
  });
});
