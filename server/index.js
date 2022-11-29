const express = require('express');
//require('dotenv').config();
const db = require('./config/connection');
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
  

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

db.once('open', () => {
    app.listen(port, console.log(`Server Running on port ${port}`));
});
