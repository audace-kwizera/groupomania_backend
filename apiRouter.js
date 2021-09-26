const express = require('express');
const usersCtrl = require('./routes/usersCtrl');

/** Création du routeur */
exports.router = (function() {
    const apiRouter = express.Router();

    /** Routes des users */
    apiRouter.route('/users/register/').post(usersCtrl.register);
    apiRouter.route('/users/login/').post(usersCtrl.login);

    return apiRouter
})();