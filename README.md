Project Description: 
Nest.js backend api with prisma ORM for managing connections and interactions with a mongodb database. 
The main resources (entities) here are students, intructor, course, department, classroom
A student has a supervisor(instructor) and can take many courses 
Each course has prerequisites (course) and is taught by an instructor in one or many classrooms 
Each classroom has a building, capacity, and room number 
Each teacher belongs to a department and has a salary
A department has a budjet and building, as well as courses pertaining to it.
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
