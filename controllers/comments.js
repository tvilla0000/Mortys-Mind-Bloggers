const comment = require('../models/comment');


module.exports = {
    index,
    create,

}

function index(req, res) {
    res.render('comments', {
        comment,
        user: req.user,
        
        

    }
    )};


function create(req, res) {
    var newComment
}