const express = require('express');
const config = require('../config/config.js'); 
const { home } = require('../controllers/home/home.controller.js');
const router = express.Router();

router.get('/', home);
router.post('/login', (req, res) => {
  const { user, password } = req.body;
  const admin = config.admin;

  if (user === admin.user && password === admin.password) {
    res.redirect('/api/v1/pacientes');
  } else {
    res.send('Usuario o contraseña incorrectos');
  }
});

module.exports = router;


