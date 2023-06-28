# LAB - Class 31

## Project: Context API - To Do List Manager

### Author: Heather Holcomb | 401d53

***

### Problem Domain

A Web Application for securely managing a To Do List.

### Links and Resources

- [GitHub Actions ci/cd]()
- [Deployed link on codesandbox.io]()

### Collaborators

- Referenced class demo code taught by Ryan Gallaway

***

### Setup

1. Clone this repo into your local environment
2. `npm i`
3. `npm start`

#### `.env` requirements (where applicable)

- `PORT` - 3001
- `DATABASE_URL` - see `.env.sample`

#### How to initialize/run your application (where applicable)

- `npm start` or `nodemon`

#### How to use your library (where applicable)

- N/A

***

### Features: Phase 1 Requirements

In Phase 1, we're going to perform some refactoring of a Todo application built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.
  1. Create a Detailed UML.

  2. Properly modularize the application into separate components, note the proposed file structure below.

  3. Implement the Context API to make some basic application settings available to components.

    - Show three items by default.
    - Hide completed items by default.
    - Add the sort word 'difficulty' by default.

  4. Style the application using the [Mantine Component API](https://mantine.dev/).

#### Tests

- `npm test`

#### UML

![UML for Class 06](UML_class31.png)
