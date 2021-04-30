const express = require('express');
const router = express.Router();
const {Userdb, validateUser} = require('../models/model');

//POST: CREATE NEW USER
router.post('/',async (req,res) => {
    //validate user
    const error = await validateUser(req.body);
    if(error.message) res.status(400).send(error.message);

    // new user
    const user = new Userdb({
        country : req.body.country,
        passenger : req.body.passenger,
        departingDate: req.body.departingDate,
        class : req.body.class,
        destination : req.body.destination,
        price : req.body.price
    })

    user
    .save()
    .then(user => {
        res.send(user);
    }).catch(error => {
        res.status(500).send("User was not stored in database");
    });
});

module.exports = router;