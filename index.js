'use strict';
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });
    app.get('/home', function (req, res) {
        res.render('./pages/home');
    });
};