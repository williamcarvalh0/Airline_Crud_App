
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
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 5000
      })
    res.render('index');
    
}

exports.update_user = (req,res) => {
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
        .then(function(userData){
            res.render("update_user", {user: userData.data})
        })
        .catch(err => {
            res.send(err);
        })
    res.render('update_user');
}