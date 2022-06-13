const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//Function get all the database from mongodb and acces the colection in db
const getAll = async(req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};
//Get a single library fron db in mongodb
const getSingle = async(req, res, next) => {
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
};
//Export the function por use in another file
module.exports = { getAll, getSingle };