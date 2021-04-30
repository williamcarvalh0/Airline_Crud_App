const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000

//connect to mongodb
mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser:true}
)
.then(() => {
    console.log("Connected to mongodb ")
}).catch(error => {
    console.log("Something wrong happened",error);
});

//start server
app.listen(PORT,() => {
    console.log("Server started at PORT ",PORT);
});