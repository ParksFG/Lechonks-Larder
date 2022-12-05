const express = require('express');
//require('dotenv').config();
require('dotenv').config();
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const connectDB = require('./config/connection');

const port = process.env.PORT || 3001;
const app = express();
 
connectDB();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'production',
}));


app.listen(port, console.log(`Server Running on port ${port}`));

