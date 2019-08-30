const Episode = require('../models/episode');

module.exports = {
    create
}

function create(req, res) {
    if(!req.user) res.status(401).send("Must be logged in to execute this action!!");
    
}