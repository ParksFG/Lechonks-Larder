const express = require('express');
const port = 5000;
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const app = express();
const connectDB = require('./config/db');

connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(port, console.log(`Server Running on port ${port}`));