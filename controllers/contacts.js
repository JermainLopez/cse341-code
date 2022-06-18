/* eslint-disable no-undef */
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
//Function get all the database from mongodb and acces the colection in db
const getAll = async(req, res) => {
    try {
        // #swagger.description = 'Display all the contacts in the database';
        const result = await mongodb.getDb().db().collection('contacts').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
};
//Get a single library fron db in mongodb
const getSingle = async(req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb
            .getDb()
            .db()
            .collection('contacts')
            .find({ _id: userId });
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists[0]);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
};
//Create a new contact in db in mongodb
const createNewContact = async(req, res) => {
    try {
        const newContact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        const result = await mongodb.getDb().db().collection('contacts').insertOne(newContact);
        if (result.acknowledged) {
            res.status(201).json(result);
        } else {
            res.status(500).json(result.error || 'Somethin cause a problem with create contact');
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
};
//Update a contact in db in mongodb
const updateContactInDatabase = async(req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const existingContact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        const result = await mongodb
            .getDb()
            .db()
            .collection('contacts')
            .updateOne({ _id: userId }, { $set: existingContact });
        if (result.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json(result.error || 'Somethin cause a problem with update contact');
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
};

//Delete a contact in db in mongodb
const deleteContactFromDatabase = async(req, res) => {
        try {
            const userId = new ObjectId(req.params.id);
            const result = await mongodb
                .getDb()
                .db()
                .collection('contacts')
                .deleteOne({ _id: userId });
            if (result.deletedCount > 0) {
                res.status(204).send();
            } else {
                res.status(500).json(result.error || 'Somethin cause a problem with delete contact');
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
            console.log(err);
        }
    }
    //Export the function por use in another file
    // eslint-disable-next-line no-undef
module.exports = { getAll, getSingle, createNewContact, updateContactInDatabase, deleteContactFromDatabase };