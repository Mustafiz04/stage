## Running the app

- `npm run start` - run the server
- `npm run start:dev` - run the server in watch mode
- `npm run start:prod` - run the server in production mode

## Testing

- `npm run test` - run tests
- `npm run test:watch` - run tests in watch mode
- `npm run test:coverage` - run tests and generate code coverage report

## Design choices

### Database

I choose to use MongoDB as the database because it is a document-oriented database and it has a flexible schema.
It also supports horizontal scaling by adding more nodes in the cluster.

### ORM

I choose to use Mongoose as the ORM because it is easy to use and has a good documentation.
It also supports all the features that I need, such as validation, hooks, and aggregation.

### Optimizing for performance and scalability

I optimized for performance by using the following strategies:

- Use Mongoose's built-in cache, which stores the schemas in memory to avoid reading them from disk every time.
- Use Mongoose's lean option in queries to avoid returning the entire document, which can be unnecessary in some cases.
- Use aggregation for filtering and sorting instead of JavaScript code, because it is faster in Mongo.

I also optimized for scalability by:

- Using a distributed database, MongoDB, which is designed to scale horizontally.
- Using Mongoose's connection pool, which allows multiple connections to the database.

I made the following assumptions during implementation:

- The database will be used by only a few users at a time, so I did not need to optimize for high concurrency.
