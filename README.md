# Example GraphQL with ReactJS

[![node](https://img.shields.io/badge/node-v9.10.0-blue.svg)](https://nodejs.org/en/)
[![npm](https://img.shields.io/badge/npm-v6.4.0-green.svg)](https://www.npmjs.com/)
[![react](https://img.shields.io/badge/react-v16.4.0-red.svg)](https://reactjs.org/)

This full-stack application, including a GraphQL server on Node.js, a React front-end (with Apollo) and MongoDB to store all of the data using mLab. Instead of creating a list of books, created records collection.

## Installation

1. Clone this repo in your local machine.
2. Run `npm install` in both folders (client and server), since the node modules are not included it.
3. Add your database credentials in the .env file. When you create the database in [mLab](http://mlab.com/), you need to assign a user and password. Those are the one you add in your file.

```env
MLAB_USER=YourUser
MLAB_PASS=PasswordYouGave
```

3. Open terminal and `cd server`. This is assuming you are already in the project folder
4. Run `node app.js`.
5. The open a new terminal window and `cd client`.
6. Run `npm start`.

## New Features (coming soon)

- Allow edit/delete entries
- Filter by year, genre or artist

> **Note:** GraphQL tutorial from [The Net Ninja YouTube channel](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg) shared by [FreeCodeCamp YouTube Channel](https://youtu.be/ed8SzALpx1Q).
