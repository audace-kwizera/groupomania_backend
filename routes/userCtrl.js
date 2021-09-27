/**
 * /** Importation du hash *
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/** Enregistrer et lire les user *
const User = require('../models/User');
const { use } = require('../routes/user');
 */

/** Router de user */
const express = require('express');
const router = express.Router();
const db = require('../models');
const usersCtrl = require('../controllers/user');

/** Importation du hash */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





