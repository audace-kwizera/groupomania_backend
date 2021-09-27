const express = require('express');
const { Sequelize } = require('sequelize');

/** Importation bodyParser */
const bodyParser = require('body-parser');

/** Création de l'application express */
const app = express();

const sequelize = new Sequelize('database_development', 'root', 'JESUSmylove@2021$', {
    host: 'localhost',
    dialect: 'mysql',  
  });
  


/** Importation de dotenv */
require('dotenv').config()

/** Création des routes */
const userRoutes = require('./routes/user');

/** Utilisation des routes */
app.use('/api/auth', userRoutes);


/** Export de notre application express */
module.exports = app; 