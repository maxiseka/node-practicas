const http = require('http');
const express = require('express');
const mongodb = require('mongojs');

console.info('iniciando script');
const app = express();
const db = mongodb('mongodb://localhost/tsvcookies');

app.use(express.static('./public'));

app.post('/newcookie', (req, res) => {
 console.info('new cookie called: ', req.query.value);

 db.cookies.insert({
     added: new Date(),
     value: req.query.value,
 }, (err, doc) => {
    res.json({
        ok: err,
        doc,
    });
 });
 
});

const server = http.createServer(app);

server.listen(5000, console.info('running on 5000'));
