const mongoose = require('mongoose');


// graphql way
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;



// apollo
/*
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/larderDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
*/
