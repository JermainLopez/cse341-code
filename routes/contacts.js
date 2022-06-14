const contactsController = require('../controllers/contacts');
const express = require('express');
const router = express.Router();

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

module.exports = router;