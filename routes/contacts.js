/* eslint-disable no-undef */
const contactsController = require('../controllers/contacts');
const express = require('express');
const router = express.Router();

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

//Call the funtion to create a new contact
router.post('/', contactsController.createNewContact);

//Update the contact from database
router.put('/:id', contactsController.updateContactInDatabase);

//Delete the contact from database
router.delete('/:id', contactsController.deleteContactFromDatabase);

module.exports = router;