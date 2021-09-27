const express = require('express');
const router = express.Router();
const db = require('../models');


/** Import des routes */
/** Version openclassrooms */
/** Enregistrement des users */
router.post('/register', (req, res, next) => {
    db.User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        isAdmin: 0
    })
    .then( submitedUser => res.send(submitedUser))
    .catch(error => res.status(400).json({ error }));
});

/** Récupération des users */
router.get('/login', (req, res, next) => {
    db.User.findAll({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        isAdmin: 0
    })
    .then(users => res.send(users))
    .catch(error => res.status(400).json({ error }));
});

/**
 * Pour chercher un seul utiliser findOne
 */














/** Avoir tous les user *
router.get('/all', (req, res, next) => {
    db.User.findAll()
        .then(users => res.send(users));
});


router.post('/register', (req, res, next) => {
    db.User.create({
        email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    isAdmin: 0
    })
        .then( submitedUser => res.send(submitedUser));
});*/

module.exports = router; 