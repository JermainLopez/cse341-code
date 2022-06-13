const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Erick Carcamo N')
})

module.exports = routes