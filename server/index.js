const express = require('express');
const port = process.env.PORT || 5000;
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

connectDB();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, console.log(`Server Running on port ${port}`));