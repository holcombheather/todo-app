# LAB - Class 32

## Project: Context API - Behaviors | To Do List Manager

### Author: Heather Holcomb | 401d53

***

### Problem Domain

A Web Application for securely managing a To Do List.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/holcombheather/todo-app/actions)
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

### Features: Phase 2 Requirements

In Phase 2, we’re going to extend the functionality of our application by allowing the user to make some decisions on how they would like the application to function. Specifically, we’ll let them make changes to 2 settings.

1. **Implement the Context API** to make some basic application settings available to components.

   - How many To Do Items to show at once.
   - Whether or not to show completed items.
   
   *Hint: if reusing the custom useForm() hook, event validation may be necessary if using any Mantine component other than `<TextInput />`.*

2. **Provide the users with a form** where they can change the values for those settings.

   - This should be given in the form of a new component, perhaps linked to from the main navigation.
   
   *Hint: Use Browser Router to create the page/route/component for this.*

3. **Render the updated settings** to the right of the "form". Consider using `<Grid />`, `<Card />`, and `<When />` components once settings are updated.

4. **Save the users choices in Local Storage**.

5. **Retrieve their preferences from Local Storage** and apply them to the application on startup.


#### Tests

- `npm test`

#### UML

![UML for Class 32](./assets/UML_class32.png)
