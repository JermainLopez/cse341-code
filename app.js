const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const port = process.env.PORT || 8080;
const app = express();

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.get('/', require('./routes/index2.js'));
        next();
    })
    .use('/', require('./routes'));


mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, function() {
            console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
        });
        console.log(`Connected to DB and listening on ${port}`);
    }
});