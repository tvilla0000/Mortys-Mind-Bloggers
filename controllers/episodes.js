const Episode = require('../models/episode');

module.exports = {
    create,
    // show
}

function create(req, res) {
    if(!req.user) res.status(401).send("Must be logged in to execute this action!!");
    var episode = new episode(req.body);
    episode.user = req.user.id;
    episode.save(function(err) {
        if(err) return next(err);
        res.redirect(`/episodes/${episode._id}`);
    })
}

