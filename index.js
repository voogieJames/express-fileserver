const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello There ...');
});

app.use(express.static('filehandler'));

app.listen(9088, () => {
    console.log(' -> server is on');
})