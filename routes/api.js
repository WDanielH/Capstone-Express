var express = require('express');
var router = express.Router();

// RESTful API routes for the Dog Entity
// Create a dog
// List all dogs
// List one dog with an id
// Delete one dog with an id
// update one dog with an id
// CRUD operations

const models = require('../models');

console.log(models.Dog)

router.get('/dogs', async function(req, res, next) {

    // request comes in
    // you perform some Db query, it might take time
    // finally when you are ready
    // send back a response
    let dogs = await models.Dog.findAll();
    // console.log(dogs)

    res.json(dogs);

    // res.render('index', { title: 'This should show all the dogs' });
});

router.post('/dogs', async function(req, res, next) {
    console.log(req.body);
    let dog = await models.Dog.create({name: req.body.name});
    res.json(dog);
});


router.get('/dogs/:id', async function(req, res, next) {

    console.log(req.params);

    let dog = await models.Dog.findOne({where: {id: req.params.id}});
    res.json(dog);
});



router.put('/dogs/:id', async function(req, res, next) {

    console.log(req.params);

    // let dog = await models.Dog.findOne({where: {id: req.params.id}});
    let dog = await models.Dog.update(req.body, {where: {id: req.params.id}});
    res.json(dog);

});

router.delete('/dogs/:id', async function(req, res, next) {
    const dog = await models.Dog.destroy({where: {id: req.params.id}});
    res.json(dog);
});




/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
