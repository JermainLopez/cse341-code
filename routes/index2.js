const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Welcome')
})

module.exports = routes;