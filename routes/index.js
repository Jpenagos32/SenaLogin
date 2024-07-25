const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const {user, password} = req.query
  const loginData ={
    usr: 'jpenagos',
    pass: 'abc123'
  }

  if(user === loginData.usr && password === loginData.pass){
    return res.render('logged', { title: 'Usted Ha Iniciado Sesión' });
  }
  if(!user || !password){
    return res.render('notLogged', {title: 'Error', message: 'Debe proporcionar usuario y contraseña'})
  }
  return res.render('notLogged', {title: 'Error', message: 'Usuario o contraseña incorrectos'})
});

module.exports = router;
