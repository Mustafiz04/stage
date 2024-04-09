## Running the app

- `npm run start` - run the server
- `npm run start:dev` - run the server in watch mode

### To run using docker
1. Download docker.
2. Build a docker image using the command docker build -t <image_name> .
3. Before starting the docker update the DB_URL inside docker-compose.yml file to the actual db URL or keep it as if you are using local Mongodb.
4. Start the docker docker compose up
5. The server will start running on the port you specify.


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

```
{
	"info": {
		"_postman_id": "c806f5ef-4dba-4d00-bef9-520774ab232d",
		"name": "Stage",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "7798838"
	},
	"item": [
		{
			"name": "1. Seed Data",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "localhost:3000/mylist/seed",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"mylist",
						"seed"
					]
				}
			},
			"response": [
				{
					"name": "1. Seed Data",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3000/mylist/seed",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"mylist",
								"seed"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "9334"
						},
						{
							"key": "ETag",
							"value": "W/\"2476-NnSUhs/qJJg+r4tSTKPeVXxyYZA\""
						},
						{
							"key": "Date",
							"value": "Tue, 09 Apr 2024 11:06:28 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"user\": [\n        {\n            \"username\": \"user1\",\n            \"preferences\": {\n                \"favoriteGenres\": [\n                    \"action\",\n                    \"comedy\"\n                ],\n                \"dislikedGenres\": [\n                    \"horror\"\n                ]\n            },\n            \"watchHistory\": [],\n            \"myList\": [],\n            \"_id\": \"66152134a9cce40b59f58851\",\n            \"__v\": 0\n        },\n        {\n            \"username\": \"user2\",\n            \"preferences\": {\n                \"favoriteGenres\": [\n                    \"drama\",\n                    \"romance\"\n                ],\n                \"dislikedGenres\": [\n                    \"action\",\n                    \"thriller\"\n                ]\n            },\n            \"watchHistory\": [],\n            \"myList\": [],\n            \"_id\": \"66152134a9cce40b59f58852\",\n            \"__v\": 0\n        },\n        {\n            \"username\": \"user3\",\n            \"preferences\": {\n                \"favoriteGenres\": [\n                    \"horror\",\n                    \"sci-fi\"\n                ],\n                \"dislikedGenres\": [\n                    \"comedy\",\n                    \"western\"\n                ]\n            },\n            \"watchHistory\": [],\n            \"myList\": [],\n            \"_id\": \"66152134a9cce40b59f58853\",\n            \"__v\": 0\n        },\n        {\n            \"username\": \"user4\",\n            \"preferences\": {\n                \"favoriteGenres\": [\n                    \"crime\",\n                    \"mystery\"\n                ],\n                \"dislikedGenres\": [\n                    \"family\",\n                    \"fantasy\"\n                ]\n            },\n            \"watchHistory\": [],\n            \"myList\": [],\n            \"_id\": \"66152134a9cce40b59f58854\",\n            \"__v\": 0\n        },\n        {\n            \"username\": \"user5\",\n            \"preferences\": {\n                \"favoriteGenres\": [\n                    \"western\",\n                    \"history\"\n                ],\n                \"dislikedGenres\": [\n                    \"documentary\",\n                    \"sport\"\n                ]\n            },\n            \"watchHistory\": [],\n            \"myList\": [],\n            \"_id\": \"66152134a9cce40b59f58855\",\n            \"__v\": 0\n        },\n        {\n            \"username\": \"user6\",\n            \"preferences\": {\n                \"favoriteGenres\": [\n                    \"documentary\",\n                    \"sport\"\n                ],\n                \"dislikedGenres\": [\n                    \"war\",\n                    \"music\"\n                ]\n            },\n            \"watchHistory\": [],\n            \"myList\": [],\n            \"_id\": \"66152134a9cce40b59f58856\",\n            \"__v\": 0\n        },\n        {\n            \"username\": \"user7\",\n            \"preferences\": {\n                \"favoriteGenres\": [\n                    \"animated\",\n                    \"family\"\n                ],\n                \"dislikedGenres\": [\n                    \"sci-fi\",\n                    \"fantasy\"\n                ]\n            },\n            \"watchHistory\": [],\n            \"myList\": [],\n            \"_id\": \"66152134a9cce40b59f58857\",\n            \"__v\": 0\n        },\n        {\n            \"username\": \"user8\",\n            \"preferences\": {\n                \"favoriteGenres\": [\n                    \"war\",\n                    \"music\"\n                ],\n                \"dislikedGenres\": [\n                    \"adventure\",\n                    \"romance\"\n                ]\n            },\n            \"watchHistory\": [],\n            \"myList\": [],\n            \"_id\": \"66152134a9cce40b59f58858\",\n            \"__v\": 0\n        },\n        {\n            \"username\": \"user9\",\n            \"preferences\": {\n                \"favoriteGenres\": [\n                    \"family\",\n                    \"fantasy\"\n                ],\n                \"dislikedGenres\": [\n                    \"action\",\n                    \"thriller\"\n                ]\n            },\n            \"watchHistory\": [],\n            \"myList\": [],\n            \"_id\": \"66152134a9cce40b59f58859\",\n            \"__v\": 0\n        },\n        {\n            \"username\": \"user10\",\n            \"preferences\": {\n                \"favoriteGenres\": [\n                    \"adventure\",\n                    \"romance\"\n                ],\n                \"dislikedGenres\": [\n                    \"documentary\",\n                    \"sport\"\n                ]\n            },\n            \"watchHistory\": [],\n            \"myList\": [],\n            \"_id\": \"66152134a9cce40b59f5885a\",\n            \"__v\": 0\n        }\n    ],\n    \"movie\": [\n        {\n            \"title\": \"The Shawshank Redemption\",\n            \"description\": \"Two prisoners discover an opportunity to escape from their jailers.\",\n            \"genres\": [\n                \"drama\"\n            ],\n            \"releaseDate\": \"1994-09-23T00:00:00.000Z\",\n            \"director\": \"Frank Darabont\",\n            \"actors\": [\n                \"Morgan Freeman\",\n                \"Tim Robbins\"\n            ],\n            \"_id\": \"66152134a9cce40b59f58865\",\n            \"__v\": 0\n        },\n        {\n            \"title\": \"The Godfather\",\n            \"description\": \"The aging Don Vito Corleone transfers control of his criminal empire to his reluctant son Michael after a attempt on his life.\",\n            \"genres\": [\n                \"crime\",\n                \"drama\"\n            ],\n            \"releaseDate\": \"1972-03-15T00:00:00.000Z\",\n            \"director\": \"Francis Ford Coppola\",\n            \"actors\": [\n                \"Marlon Brando\",\n                \"Al Pacino\"\n            ],\n            \"_id\": \"66152134a9cce40b59f58866\",\n            \"__v\": 0\n        },\n        {\n            \"title\": \"The Dark Knight\",\n            \"description\": \"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept assistance from a new ally, the caped crusader Dick Grayson, to stop him.\",\n            \"genres\": [\n                \"action\",\n                \"crime\",\n                \"thriller\"\n            ],\n            \"releaseDate\": \"2008-07-18T00:00:00.000Z\",\n            \"director\": \"Christopher Nolan\",\n            \"actors\": [\n                \"Christian Bale\",\n                \"Heath Ledger\"\n            ],\n            \"_id\": \"66152134a9cce40b59f58867\",\n            \"__v\": 0\n        },\n        {\n            \"title\": \"12 Angry Men\",\n            \"description\": \"A jury fighting against a potentially deadly disease must decide the fate of a man who claims he is innocent.\",\n            \"genres\": [\n                \"drama\"\n            ],\n            \"releaseDate\": \"1957-03-22T00:00:00.000Z\",\n            \"director\": \"Sidney Lumet\",\n            \"actors\": [\n                \"Henry Fonda\",\n                \"Martin Balsam\"\n            ],\n            \"_id\": \"66152134a9cce40b59f58868\",\n            \"__v\": 0\n        },\n        {\n            \"title\": \"Schindler's List\",\n            \"description\": \"The true story of Oskar Schindler, a German businessman who saves the lives of thousands of Jews during the Holocaust.\",\n            \"genres\": [\n                \"biography\",\n                \"drama\",\n                \"history\"\n            ],\n            \"releaseDate\": \"1993-11-29T00:00:00.000Z\",\n            \"director\": \"Steven Spielberg\",\n            \"actors\": [\n                \"Liam Neeson\",\n                \"Ben Kingsley\"\n            ],\n            \"_id\": \"66152134a9cce40b59f58869\",\n            \"__v\": 0\n        },\n        {\n            \"title\": \"Pulp Fiction\",\n            \"description\": \"A boxing Rumba is about to get the woman he loves killed unless he first completes his next job. Meanwhile, a pair of hitmen are being pursued by a bounty hunter.\",\n            \"genres\": [\n                \"crime\",\n                \"drama\"\n            ],\n            \"releaseDate\": \"1994-05-12T00:00:00.000Z\",\n            \"director\": \"Quentin Tarantino\",\n            \"actors\": [\n                \"John Travolta\",\n                \"Uma Thurman\"\n            ],\n            \"_id\": \"66152134a9cce40b59f5886a\",\n            \"__v\": 0\n        },\n        {\n            \"title\": \"The Lord of the Rings: The Return of the King\",\n            \"description\": \"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom to destroy the One Ring.\",\n            \"genres\": [\n                \"adventure\",\n                \"fantasy\"\n            ],\n            \"releaseDate\": \"2003-12-17T00:00:00.000Z\",\n            \"director\": \"Peter Jackson\",\n            \"actors\": [\n                \"Elijah Wood\",\n                \"Viggo Mortensen\"\n            ],\n            \"_id\": \"66152134a9cce40b59f5886b\",\n            \"__v\": 0\n        },\n        {\n            \"title\": \"The Good, the Bad and the Ugly\",\n            \"description\": \"A bounty hunting scam artist is double-crossed by his partner in a highly dangerous game of cat and mouse.\",\n            \"genres\": [\n                \"adventure\",\n                \"western\"\n            ],\n            \"releaseDate\": \"1966-12-15T00:00:00.000Z\",\n            \"director\": \"Sergio Leone\",\n            \"actors\": [\n                \"Clint Eastwood\",\n                \"Lee Van Cleef\"\n            ],\n            \"_id\": \"66152134a9cce40b59f5886c\",\n            \"__v\": 0\n        },\n        {\n            \"title\": \"The Silence of the Lambs\",\n            \"description\": \"An FBI trainee seeks the help of a imprisoned and confessed serial killer to solve a series of murders.\",\n            \"genres\": [\n                \"crime\",\n                \"drama\",\n                \"thriller\"\n            ],\n            \"releaseDate\": \"1991-08-30T00:00:00.000Z\",\n            \"director\": \"Jonathan Demme\",\n            \"actors\": [\n                \"Jodie Foster\",\n                \"Anthony Hopkins\"\n            ],\n            \"_id\": \"66152134a9cce40b59f5886d\",\n            \"__v\": 0\n        },\n        {\n            \"title\": \"The Matrix\",\n            \"description\": \"A computer hacker is drawn into a war between humans and cyborgs.\",\n            \"genres\": [\n                \"action\",\n                \"sci-fi\"\n            ],\n            \"releaseDate\": \"1999-03-31T00:00:00.000Z\",\n            \"director\": \"The Wachowskis\",\n            \"actors\": [\n                \"Keanu Reeves\",\n                \"Laurence Fishburne\"\n            ],\n            \"_id\": \"66152134a9cce40b59f5886e\",\n            \"__v\": 0\n        },\n        {\n            \"title\": \"Forrest Gump\",\n            \"description\": \"The life of Forrest Gump, a man with a low IQ, who finds himself in the middle of many historic events.\",\n            \"genres\": [\n                \"comedy\",\n                \"drama\",\n                \"romance\"\n            ],\n            \"releaseDate\": \"1994-07-06T00:00:00.000Z\",\n            \"director\": \"Robert Zemeckis\",\n            \"actors\": [\n                \"Tom Hanks\",\n                \"Gary Sinise\"\n            ],\n            \"_id\": \"66152134a9cce40b59f5886f\",\n            \"__v\": 0\n        }\n    ],\n    \"tvShow\": [\n        {\n            \"title\": \"Breaking Bad\",\n            \"description\": \"A high school chemistry teacher turns to cooking and drug trafficking after he is diagnosed with lung cancer.\",\n            \"genres\": [\n                \"drama\",\n                \"thriller\"\n            ],\n            \"episodes\": [\n                {\n                    \"episodeNumber\": 1,\n                    \"seasonNumber\": 1,\n                    \"releaseDate\": \"2008-07-07T00:00:00.000Z\",\n                    \"director\": \"Vince Gilligan\",\n                    \"actors\": [\n                        \" Bryan Cranston\",\n                        \" Aaron Paul\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f5887c\"\n                },\n                {\n                    \"episodeNumber\": 10,\n                    \"seasonNumber\": 1,\n                    \"releaseDate\": \"2008-07-14T00:00:00.000Z\",\n                    \"director\": \"Vince Gilligan\",\n                    \"actors\": [\n                        \" Bryan Cranston\",\n                        \" Aaron Paul\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f5887d\"\n                },\n                {\n                    \"episodeNumber\": 15,\n                    \"seasonNumber\": 2,\n                    \"releaseDate\": \"2009-01-11T00:00:00.000Z\",\n                    \"director\": \"Vince Gilligan\",\n                    \"actors\": [\n                        \" Bryan Cranston\",\n                        \" Aaron Paul\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f5887e\"\n                }\n            ],\n            \"_id\": \"66152134a9cce40b59f5887b\",\n            \"__v\": 0\n        },\n        {\n            \"title\": \"The Office (US)\",\n            \"description\": \"The daily lives of the employees in the Scranton, Pennsylvania branch of the Dunder Mifflin paper company.\",\n            \"genres\": [\n                \"comedy\"\n            ],\n            \"episodes\": [\n                {\n                    \"episodeNumber\": 1,\n                    \"seasonNumber\": 1,\n                    \"releaseDate\": \"2005-03-24T00:00:00.000Z\",\n                    \"director\": \"Greg Daniels\",\n                    \"actors\": [\n                        \" Steve Carell\",\n                        \" John Krasinski\",\n                        \" Rainn Wilson\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f58880\"\n                },\n                {\n                    \"episodeNumber\": 15,\n                    \"seasonNumber\": 1,\n                    \"releaseDate\": \"2005-04-15T00:00:00.000Z\",\n                    \"director\": \"Greg Daniels\",\n                    \"actors\": [\n                        \" Steve Carell\",\n                        \" John Krasinski\",\n                        \" Rainn Wilson\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f58881\"\n                },\n                {\n                    \"episodeNumber\": 30,\n                    \"seasonNumber\": 2,\n                    \"releaseDate\": \"2005-09-16T00:00:00.000Z\",\n                    \"director\": \"Greg Daniels\",\n                    \"actors\": [\n                        \" Steve Carell\",\n                        \" John Krasinski\",\n                        \" Rainn Wilson\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f58882\"\n                },\n                {\n                    \"episodeNumber\": 45,\n                    \"seasonNumber\": 3,\n                    \"releaseDate\": \"2006-09-28T00:00:00.000Z\",\n                    \"director\": \"Greg Daniels\",\n                    \"actors\": [\n                        \" Steve Carell\",\n                        \" John Krasinski\",\n                        \" Rainn Wilson\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f58883\"\n                }\n            ],\n            \"_id\": \"66152134a9cce40b59f5887f\",\n            \"__v\": 0\n        },\n        {\n            \"title\": \"Breaking Bad\",\n            \"description\": \"A high school chemistry teacher turns to cooking and dealing drugs to secure his future for his family.\",\n            \"genres\": [\n                \"drama\",\n                \"crime\"\n            ],\n            \"episodes\": [\n                {\n                    \"episodeNumber\": 1,\n                    \"seasonNumber\": 1,\n                    \"releaseDate\": \"2008-01-20T00:00:00.000Z\",\n                    \"director\": \"Vince Gilligan\",\n                    \"actors\": [\n                        \" Bryan Cranston\",\n                        \" Aaron Paul\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f58885\"\n                },\n                {\n                    \"episodeNumber\": 7,\n                    \"seasonNumber\": 1,\n                    \"releaseDate\": \"2008-01-27T00:00:00.000Z\",\n                    \"director\": \"Vince Gilligan\",\n                    \"actors\": [\n                        \" Bryan Cranston\",\n                        \" Aaron Paul\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f58886\"\n                },\n                {\n                    \"episodeNumber\": 13,\n                    \"seasonNumber\": 2,\n                    \"releaseDate\": \"2008-03-09T00:00:00.000Z\",\n                    \"director\": \"Vince Gilligan\",\n                    \"actors\": [\n                        \" Bryan Cranston\",\n                        \" Aaron Paul\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f58887\"\n                },\n                {\n                    \"episodeNumber\": 26,\n                    \"seasonNumber\": 5,\n                    \"releaseDate\": \"2013-06-08T00:00:00.000Z\",\n                    \"director\": \"Vince Gilligan\",\n                    \"actors\": [\n                        \" Bryan Cranston\",\n                        \" Aaron Paul\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f58888\"\n                }\n            ],\n            \"_id\": \"66152134a9cce40b59f58884\",\n            \"__v\": 0\n        },\n        {\n            \"title\": \"The Sopranos\",\n            \"description\": \"The story of New Jersey mob boss Tony Soprano and his family.\",\n            \"genres\": [\n                \"drama\"\n            ],\n            \"episodes\": [\n                {\n                    \"episodeNumber\": 1,\n                    \"seasonNumber\": 1,\n                    \"releaseDate\": \"1999-03-21T00:00:00.000Z\",\n                    \"director\": \"David Chase\",\n                    \"actors\": [\n                        \" James Gandolfini\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f5888a\"\n                },\n                {\n                    \"episodeNumber\": 9,\n                    \"seasonNumber\": 2,\n                    \"releaseDate\": \"1999-11-21T00:00:00.000Z\",\n                    \"director\": \"Allen Coulter\",\n                    \"actors\": [\n                        \" James Gandolfini\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f5888b\"\n                },\n                {\n                    \"episodeNumber\": 15,\n                    \"seasonNumber\": 4,\n                    \"releaseDate\": \"2002-02-24T00:00:00.000Z\",\n                    \"director\": \"James Gray\",\n                    \"actors\": [\n                        \" James Gandolfini\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f5888c\"\n                },\n                {\n                    \"episodeNumber\": 66,\n                    \"seasonNumber\": 7,\n                    \"releaseDate\": \"2007-06-23T00:00:00.000Z\",\n                    \"director\": \"Michael Caton-Jones\",\n                    \"actors\": [\n                        \" James Gandolfini\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f5888d\"\n                }\n            ],\n            \"_id\": \"66152134a9cce40b59f58889\",\n            \"__v\": 0\n        }\n    ]\n}"
				}
			]
		},
		{
			"name": "2. Add to MyList",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"title\": \"asdf\",\n    \"description\": \"1wdsgrfed\",\n    \"genres\": \"Action\",\n    \"releaseDate\": \"2024-01-20\",\n    \"director\": \"\",\n    \"actors\": [\n        \n    ]\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:3000/mylist/:userId/:itemId/:itemType",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"mylist",
						":userId",
						":itemId",
						":itemType"
					],
					"variable": [
						{
							"key": "userId",
							"value": "6615131596751d48aea54e48"
						},
						{
							"key": "itemId",
							"value": "66152134a9cce40b59f5887b"
						},
						{
							"key": "itemType",
							"value": "tvshow"
						}
					]
				}
			},
			"response": [
				{
					"name": "2. Add to MyList",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"title\": \"asdf\",\n    \"description\": \"1wdsgrfed\",\n    \"genres\": \"Action\",\n    \"releaseDate\": \"2024-01-20\",\n    \"director\": \"\",\n    \"actors\": [\n        \n    ]\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3000/mylist/:userId/:itemId/:itemType",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"mylist",
								":userId",
								":itemId",
								":itemType"
							],
							"variable": [
								{
									"key": "userId",
									"value": "6615131596751d48aea54e48"
								},
								{
									"key": "itemId",
									"value": "66150dc02f4c226c74c113f2"
								},
								{
									"key": "itemType",
									"value": "movie"
								}
							]
						}
					},
					"status": "Created",
					"code": 201,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "48"
						},
						{
							"key": "ETag",
							"value": "W/\"30-yjQ+4ZyLXYSmq1ykn702rzMlLUs\""
						},
						{
							"key": "Date",
							"value": "Tue, 09 Apr 2024 10:06:38 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"message\": \"Item added to My List successfully\"\n}"
				}
			]
		},
		{
			"name": "3. Remove from MyList",
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "localhost:3000/mylist/:userId/:itemId/:itemType/remove",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"mylist",
						":userId",
						":itemId",
						":itemType",
						"remove"
					],
					"variable": [
						{
							"key": "userId",
							"value": "6615131596751d48aea54e48"
						},
						{
							"key": "itemId",
							"value": "66150dc02f4c226c74c113f2"
						},
						{
							"key": "itemType",
							"value": "movie"
						}
					]
				}
			},
			"response": [
				{
					"name": "3. Remove from MyList",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "localhost:3000/mylist/:userId/:itemId/:itemType/remove",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"mylist",
								":userId",
								":itemId",
								":itemType",
								"remove"
							],
							"variable": [
								{
									"key": "userId",
									"value": "6615131596751d48aea54e48"
								},
								{
									"key": "itemId",
									"value": "66150dc02f4c226c74c113f2"
								},
								{
									"key": "itemType",
									"value": "movie"
								}
							]
						}
					},
					"status": "Created",
					"code": 201,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "52"
						},
						{
							"key": "ETag",
							"value": "W/\"34-8tTLwNmnh0HEU4lUWA/hnih2HRg\""
						},
						{
							"key": "Date",
							"value": "Tue, 09 Apr 2024 12:05:32 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"message\": \"Item removed from My List successfully\"\n}"
				}
			]
		},
		{
			"name": "4. Fetch user MyList",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "localhost:3000/mylist/:userId?page=1&limit=10",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"mylist",
						":userId"
					],
					"query": [
						{
							"key": "page",
							"value": "1"
						},
						{
							"key": "limit",
							"value": "10"
						}
					],
					"variable": [
						{
							"key": "userId",
							"value": "6615131596751d48aea54e48"
						}
					]
				}
			},
			"response": [
				{
					"name": "4. Fetch user MyList",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3000/mylist/:userId?page=1&limit=10",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"mylist",
								":userId"
							],
							"query": [
								{
									"key": "page",
									"value": "1"
								},
								{
									"key": "limit",
									"value": "10"
								}
							],
							"variable": [
								{
									"key": "userId",
									"value": "6615131596751d48aea54e48"
								}
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "1000"
						},
						{
							"key": "ETag",
							"value": "W/\"3e8-TdsX27MMeDRbDVblSC5CsMEouJ8\""
						},
						{
							"key": "Date",
							"value": "Tue, 09 Apr 2024 12:06:42 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"data\": [\n        {\n            \"_id\": \"66150dc02f4c226c74c113f2\",\n            \"title\": \"asdf\",\n            \"description\": \"1wdsgrfed\",\n            \"genres\": [\n                \"Action\"\n            ],\n            \"releaseDate\": \"2024-01-20T00:00:00.000Z\",\n            \"director\": \"\",\n            \"actors\": [\n                \"\"\n            ],\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"66152134a9cce40b59f5887b\",\n            \"title\": \"Breaking Bad\",\n            \"description\": \"A high school chemistry teacher turns to cooking and drug trafficking after he is diagnosed with lung cancer.\",\n            \"genres\": [\n                \"drama\",\n                \"thriller\"\n            ],\n            \"episodes\": [\n                {\n                    \"episodeNumber\": 1,\n                    \"seasonNumber\": 1,\n                    \"releaseDate\": \"2008-07-07T00:00:00.000Z\",\n                    \"director\": \"Vince Gilligan\",\n                    \"actors\": [\n                        \" Bryan Cranston\",\n                        \" Aaron Paul\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f5887c\"\n                },\n                {\n                    \"episodeNumber\": 10,\n                    \"seasonNumber\": 1,\n                    \"releaseDate\": \"2008-07-14T00:00:00.000Z\",\n                    \"director\": \"Vince Gilligan\",\n                    \"actors\": [\n                        \" Bryan Cranston\",\n                        \" Aaron Paul\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f5887d\"\n                },\n                {\n                    \"episodeNumber\": 15,\n                    \"seasonNumber\": 2,\n                    \"releaseDate\": \"2009-01-11T00:00:00.000Z\",\n                    \"director\": \"Vince Gilligan\",\n                    \"actors\": [\n                        \" Bryan Cranston\",\n                        \" Aaron Paul\"\n                    ],\n                    \"_id\": \"66152134a9cce40b59f5887e\"\n                }\n            ],\n            \"__v\": 0\n        }\n    ],\n    \"total\": 2,\n    \"page\": \"1\",\n    \"limit\": \"10\"\n}"
				}
			]
		}
	]
}
```
