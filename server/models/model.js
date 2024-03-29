const mongoose = require('mongoose');
const yup = require('yup');
const Swal = require('sweetalert2')

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

const validateClient = (client) => {
    const schema = yup.object().shape({
        country:yup.string().required(),
        passenger:yup.string().required(),
        departingDate:yup.string().required(),
        class:yup.string().required(),
        destination:yup.string().required(),
        price:yup.number().required()
    });

    return schema
    .validate(client)
    .then(client => client)
    .catch((error) => {
        return (
            Swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "error",
              })
        );
    });
}

exports.ClientDB = new mongoose.model('airlinedb',schema);
exports.validateClient = validateClient;