const { mongoose } = require('mongoose')
const dotenv = require("dotenv")
dotenv.config();
// console.log(process.env)

const connectDB = async (input) => {
  try {
  //  const x = await mongoose.connect("mongodb://localhost:27017/test")
    const x=await  mongoose.connect('mongodb+srv://Leo:Lcyang0319.@cluster0.lbozp.mongodb.net/test');
    console.log("Connected to db");
    if (input.drop === true)
      mongoose.connection.db.dropDatabase();
    // console.log("Dropped db");
    // get the data from Github 
  } catch (error) {
    console.log('db error');
  }
}

module.exports = { connectDB }