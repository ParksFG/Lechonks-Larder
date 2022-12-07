const express = require('express');
const PORT = process.env.PORT || 5001;
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(port, console.log(`Server Running on port ${port}`));