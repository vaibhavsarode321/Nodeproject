

const mongoose = require('mongoose');

const mongodb = "mongodb+srv://vaibhav123:Vaibhav1234@cluster0-hakhz.mongodb.net/test?retryWrites=true&w=majority";


 const database = mongoose.connect( mongodb , ()=>{
 
  console.log("Database is connected") },
   
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }


)

module.exports = database;