const express = require('express');
//require('dotenv').config();
const db = require('./config/connection');
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const app = express();


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

db.once('open', () => {
    app.listen(port, console.log(`Server Running on port ${port}`));
});
