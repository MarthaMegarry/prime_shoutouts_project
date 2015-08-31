/**
 * Created by Mothra on 8/30/15.
 */
var shoutouts = require('../models/shoutouts')
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next){
    console.log('shout out complete');
    res.send(shoutouts);
});

module.exports = router;
