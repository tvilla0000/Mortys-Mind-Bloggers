var user = require('../models/user');

module.exports = {
    index,

}

function index(req, res) {
    user.find({}, function(err, users) {
        res.render('index', {
            users,
            title: "Morty's Mind Bloggers",
            user: req.user
        })
    })
}