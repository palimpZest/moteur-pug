// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Hey ! It\'s a GET');
// });

// /* GET user with ID. */
// router.get('/:id(\\d+)', function(req, res, next) {
//   res.send('Hey ! It\'s a GET with ID ' + req.params.id);
// });

// /* POST user creation. */
// router.post('/', function(req, res, next) {
//   res.send('Hey ! It\'s a POST');
// });

// /* PUT user creation. */
// router.put('/:id(\\w+)', function(req, res, next) {
//   res.send('Hey my name is ' + req.params.id);
// });

// /* DELETE user creation. */
// router.delete('/:id(\\d+)', function(req, res, next) {
//   res.send('Hey it\'s a DELETE ID ' + req.params.id);
// });

// module.exports = router;


var express = require('express');
var router = express.Router();

/* PUT user with Name */
router.put('/:username([a-z][a-z-]*)', function(req, res, next) {
  res.send('Hey ! My name is ' + req.params.username);
});

/* DELETE user with ID. */
router.delete('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a DELETE ID ' + req.params.id);
});

module.exports = router;
