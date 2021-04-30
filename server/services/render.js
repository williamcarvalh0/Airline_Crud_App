
const axios = require('axios');
const Swal = require('sweetalert2');

exports.homeRoutes = (req,res) => {
    //make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index',{users:response.data});
        })
        .catch(err =>{
            res.send(err);
        })    
}

exports.bookList = (req,res) => {
    //make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('book_list',{users:response.data});
        })
        .catch(err =>{
            res.send(err);
        })    
}

exports.add_user = (req,res) => {
    res.render('index')    
}