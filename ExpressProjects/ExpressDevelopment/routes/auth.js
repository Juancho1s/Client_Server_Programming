var express = require('express');
var router = express.Router();

const passport = require('../controllers/AuthController');
const { UsersController } = require('../controllers/UsersController');

router.get('/login', function(req, res){
    res.render('login');
});

router.get('/protected', passport.authenticate('session'), function(req, res){
    res.send('Welcome to protected section!!!');
});

router.post('/login', passport.authenticate(
    'local',
    {
        successRedirect: '/',
        failureRedirect: '/auth/login'
    }
));

router.get('/logup', function(req, res){
    res.render('logup');
});

router.post('/logup', UsersController.addUser);


module.exports = router;