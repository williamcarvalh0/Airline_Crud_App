const {ClientDB, validateClient} = require('../models/model');

//POST: CREATE NEW CLIENT
exports.create = ('/',async (req,res) => {
    //validate client
    const error = await validateClient(req.body);
    if(error.message) res.status(400).send(error.message);

    // new client
    const client = new ClientDB({
        country : req.body.country,
        passenger : req.body.passenger,
        departingDate: req.body.departingDate,
        class : req.body.class,
        destination : req.body.destination,
        price : req.body.price
    })

    client
    .save()
    .then(client => {
        res.redirect('/add-user');
    }).catch(error => {
        res.status(500).send(`${req.body.passenger} was not stored in database because this client already exists!`);
    });
});

//GET: ALL CLIENTS
exports.find = ("/",(req,res) => {
    ClientDB.find()
    .then(clients => res.send(clients))
    .catch((error) => {
        res.status(500).send("Something went wrong");
    });
});