### Pankod Front-end Challenge

This repository contains the implementation for [Pankod Challenge](https://github.com/pankod/frontend-challenge).

Uses the guidance from [Pankod Next Boilerplate](https://github.com/pankod/next-boilerplate). Unrelated folders and files removed for the sake of simplicity. `npm` scripts are untouched.

### About

Uses two pages. These are `Home` and `FeedDisplay`.

The `Home` page is the landing page for the application. Includes two entries for further navigation.

The `FeedDisplay` page is the focus of the application. User will receive a list of movies or series as feed with respect to navigation. User might change the ordering of this feed and might filter the feed with a title search query.

As you might notice there's no testing included in the project. Reason for this is, this challenge is my first ReactJs and/or NextJs application and I could not invested my time into testing. Other than the I believe -hope- the project mostly ticks off base and bonus requirements.

##### Note

Buttons and hyperlinks in the navigation, and the footer sections of the application are purely visual. 

### Setup

`npm install`

### Run

Actually the recommended way to run this application is via the `build` and `start` npm scripts. These scripts generate a production ready and optimized  version of the application but the way of my usage of server breaks the production server. 

So best way to view the application is to start it in the development mode.

`npm run start:dev`

