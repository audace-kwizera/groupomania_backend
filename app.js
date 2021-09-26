const express = require('express');

/** Importation bodyParser */
const bodyParser = require('body-parser');

/** Création de l'application express */
const app = express();


/** Importation de dotenv */
require('dotenv').config()

app.use(bodyParser.json());

/** Export de notre application express */
module.exports = app; 