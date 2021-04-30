const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const userRoute = require('./server/routes/router');
const connectDB = require('./server/database/connection');

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/users',userRoute);

//connect to mongodb
connectDB();

//start server
app.listen(PORT,() => {
    console.log("Server started at PORT ",PORT);
});