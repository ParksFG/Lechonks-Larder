const express = require('express');
//require('dotenv').config();
const port = 5000;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const app = express();


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(port, console.log(`Server Running on port ${port}`));

