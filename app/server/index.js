const express = require('express');
const fs = require('fs');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// API
app.get('/api/exchanges', (req, res) => {
    fs.readFile('data.json', 'utf8', function (err, data) {
        if (err) throw err;

        res.json(JSON.parse(data));
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);