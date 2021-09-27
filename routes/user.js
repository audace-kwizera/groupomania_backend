/** Router de user */
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/user');

router.post('/register', usersCtrl.register);
router.post('/login', usersCtrl.login);

module.exports = router;
