const contactsController = require('../controllers/contacts');


if (contactsController === require('../controllers/contacts')) {
    const express = require('express');
    const router = express.Router();
    router.get('/', contactsController.getAll);

    router.get('/:id', contactsController.getSingle);

    module.exports = router;
} else {
    const router = require('express').Router();

    router.get('/', (req, res) => {
        res.send('Starting')
    });
    module.exports = router;
}