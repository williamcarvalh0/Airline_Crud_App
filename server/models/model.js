const mongoose = require('mongoose');
const yup = require('yup');

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

const validateUser = (user) => {
    const schema = yup.object().shape({
        country:yup.string().required(),
        passenger:yup.string().required(),
        departingDate:yup.string().required(),
        class:yup.string().required(),
        destination:yup.string().required(),
        price:yup.number().required()
    });

    return schema
    .validate(user)
    .then(user => user)
    .catch((error) => {
        return {
            message:error.message
        }
    });
}

exports.Userdb = new mongoose.model('airlinedb',schema);
exports.validateUser = validateUser;