const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Erick Carcamos')
})

module.exports = routes