const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    country:{
        type:String,
        required:true
    },
    passenger:{
        type:String,
        required:true,
        unique: true
    },
    departingDate:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true      
    },
    destination:{
        type:String,
        required:true        
    },
    price:{
        type:Number,
        required:true       
    }
});

const Userdb = mongoose.model('airlinedb',schema);

module.exports = Userdb;