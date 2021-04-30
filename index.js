const express = require('express');
const app = express();
require('dotenv').config();
const clientRoute = require('./server/routes/router');
const connectDB = require('./server/database/connection');
const { connect } = require('./server/routes/router');
const path = require('path');

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");

//load assets
app.use("/css",express.static(path.resolve(__dirname,"assets/css")));

//load routers
app.use('/',require('./server/routes/router'));

//routes
app.use('/api/clients',clientRoute);

//connect to mongodb
connectDB();

//start server
app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
});