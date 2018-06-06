const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const PORT = 4000;

//Set up middleware endpoint to understand GraphQL
app.use('/graphql', graphqlHTTP({
  // Define schema
  schema
}));

app.listen(PORT, () => {
  console.log(`Now listening for requests on PORT ${PORT}`);
})