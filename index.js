'use strict';

const express = require('express');

const port = 9012
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/cta.kml', (req, res, next) => {
    res.type('application/vnd.google-earth.kml+xml');
    res.sendFile(__dirname + '/filehandler/cta.kml');
    console.log(' - cta ok -');
});

app.listen(9012, () => {
    console.log(' -> server is on');
    console.log(' -> port ', port);
})