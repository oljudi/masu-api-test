# Masu API - Test

## Build with 
- [NodeJS](https://nodejs.org/en/about)

- [Typescript](https://www.typescriptlang.org/)

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for NodeJS

## Requirements
This project need NodeJs 14+ to run

To install [node](https://nodejs.org/en/about) you can use [nvm](https://github.com/nvm-sh/nvm): 
```bash
nvm install node
```

## List of Environmentals Variables (Development)

Move to "env" directory and ensure this enviromentals, are setted correctly into "development.env":

```bash
cd env
```

- DUMMY_JSON: Dummy external API service
```plaintext
DUMMY_JSON=https://dummyjson.com
```

## Installation

- Use npm to install dependencies
```bash
npm install
```

- Once dependencies are installed, run project on development mode
```bash
npm run dev
```
- This will create a hot reload local instance of the project, usually located on -> http://localhost:3000

## Available scripts

- Run server on development mode
```bash
npm run dev
```
- Run server on production mode
```bash
npm start
```

## About
This project was created as a technical test for [Masu](https://www.masu.mx/)

This project was created with [express-generator-typescript](https://github.com/seanpmaxwell/express-generator-typescript).
