var express = require('express');
var router = express.Router();





/* GET users listing. */
// '/users' + '/'
router.get('/', function(req, res, next) {
  res.send('respond with a resource ajhsgdjhsg');
});

// '/users' + '/name'
router.get('/name', function(req, res, next) {
  // console.log(req.query);
  // console.log(req);

  res.send('Its john!');
  // setTimeout(() => {
  //   res.send('Its john!');
  // }, 5000)

});


router.get('/name/:id/:name', function(req, res, next) {
  // console.log(req.query);
  // console.log(req);
  console.log(req.params);

  res.send('Its params john!');
  // setTimeout(() => {
  //   res.send('Its john!');
  // }, 5000)

});

router.post('/name', function(req, res, next) {
  console.log(req.body);
  res.send('Its post john!');
})

module.exports = router;
