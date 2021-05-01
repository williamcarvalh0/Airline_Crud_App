const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');
const services = require('../services/render');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.add_user);


/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/book-list', services.bookList)
 
// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
 
 module.exports = route