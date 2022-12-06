const mongoose = require('mongoose');

const connectDB = async () => {

    const conn = await mongoose.connect("mongodb+srv://tonyz1234:tonyz1234@cluster0.023fgln.mongodb.net/?retryWrites=true&w=majority");

    console.log (`MongoDb connected : ${conn.connection.host}`);


};

module.exports = connectDB;