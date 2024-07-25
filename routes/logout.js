const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.render('logOut', { title: 'Sesión Terminada' });
});

module.exports = router;
