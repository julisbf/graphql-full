const mongoose = require('mongoose');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const app = express();
const PORT = 4000;

//Use for manage env variables
require('dotenv').config();

//allows cross-origin requests
app.use(cors());

//Set the connection with DB
mongoose.connect(`mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@ds151970.mlab.com:51970/graphql-full`);
mongoose.connection.once('open', () => {
  console.log('Connected to DB');
})

//Set up middleware endpoint to understand GraphQL
app.use('/graphql', graphqlHTTP({
  // Define schema
  schema,
  graphiql: true
}));

//Set the connection with server
app.listen(PORT, () => {
  console.log(`Now listening for requests on PORT ${PORT}`);
})