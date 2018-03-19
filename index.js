'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
const port = 9012

app.get('/', (req, res) => {
    res.send('Hello There ...');
});

app.use(cors());
app.use(express.static('filehandler'));

app.listen(9012, () => {
    console.log(' -> server is on');
    console.log(' -> port ', port);
})