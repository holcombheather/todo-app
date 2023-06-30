# LAB - Class 33

## Project: <Login /> and <Auth /> | To Do List Manager

### Author: Heather Holcomb | 401d53

***

### Problem Domain

A Web Application for securely managing a To Do List.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/holcombheather/todo-app/actions)
- [Deployed link on codesandbox.io]()

### Collaborators

- Referenced class demo code taught by Ryan Gallaway.
- Used AI to provide additional information about cookies and to help in test development. 

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

### Features: Phase 3 Requirements

# Phase 3

In Phase 3, we’d like to extend the functionality of the application by requiring users be logged in to view items and also restrict access based on user type. The user stories from Phases 1, and 2 remain unchanged. For this phase, we are now adding the following new user stories.

## New User Stories

1. As a user, I want to provide a way for other users to create new accounts.
2. As a user, I want to provide a way for all users to login to their account.
3. As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.
4. As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items.
5. As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete.
6. As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items.

---

#### Tests

- `npm test`

#### UML

![UML for Class 33](./assets/UML_class33.png)
