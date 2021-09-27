/** Importation du hash */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/** Enregistrer et lire les user */
const User = require('../models/User');
const { use } = require('../routes/user');


/** Enregistrement de nouveaux utilisateurs */
exports.register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10) 
        .then(hash => {
            const user = new User({
                email: req.body.email,
                username: req.body.username,
                password: hash,
                isAdmin: 0
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur crée' }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {

};
