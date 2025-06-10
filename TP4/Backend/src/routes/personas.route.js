const express = require('express');
const router = express.Router();
const {getPersonas} = require('../controllers/personas.controller');

router.get('/', getPersonas);

module.exports = router;