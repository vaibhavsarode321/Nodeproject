

var mongoose = require('mongoose');


const login = mongoose.Schema({

        username:{
            type :String,
            required : true 

            
        },
        passward:{
            type : String , 
            required : true  
        }

});

module.exports = mongoose.model('userlogin', login);
    
    
    
    /*





 
const login = new Schema({
  author: ObjectId,
  title: String,
  username : String,
  passward : Date
});*/