const mongoose = require('mongoose');

//customer schema
const customers = mongoose.model('customers',{
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    number: {
        type:Number,
        required:true
    },
   
    
    
});


module.export = { customers }