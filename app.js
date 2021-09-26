const express = require('express');

/** Importation bodyParser */
const bodyParser = require('body-parser');

/** Création de l'application express */
const app = express();

/** Import des routes */
const userRoutes = require('./routes/user');


/** Importation de dotenv */
require('dotenv').config()

app.use(bodyParser.json());

/** Export de notre application express */
module.exports = app; 