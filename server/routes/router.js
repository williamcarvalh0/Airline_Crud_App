const express = require('express');
const router = express.Router();
const {ClientDB, validateClient} = require('../models/model');

//POST: CREATE NEW CLIENT
router.post('/',async (req,res) => {
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
        res.send(client);
    }).catch(error => {
        res.status(500).send("Client was not stored in database. Fill all the form or user already exists");
    });
});

//GET: ALL CLIENTS
router.get("/",(req,res) => {
    ClientDB.find()
    .then(clients => res.send(clients))
    .catch((error) => {
        res.status(500).send("Something went wrong");
    });
});

//GET: CLIENT BY ID
router.get("/:id", async (req,res) => {
   const client = await ClientDB.findById(req.params.id);
   if(!client) res.status(404).send("Client not found");
   res.send(client); 
});

//UPDATE CLIENT BY ID
router.put('/:id', async (req,res) =>{
    const updateClient = await ClientDB.findByIdAndUpdate(req.params.id, {
        country : req.body.country,
        passenger : req.body.passenger,
        departingDate: req.body.departingDate,
        class : req.body.class,
        destination : req.body.destination,
    },
    {new:true}
    );

    if(!updateClient) res.status(404).send("Client not found");
    res.send(updateClient);
});

//DELETE CLIENT BY ID
router.delete('/:id', async (req,res) => {
    const client = await ClientDB.findByIdAndRemove(req.params.id);
    if(!client) res.status(404).send("Client was not found");
    res.send(client);
})

module.exports = router;