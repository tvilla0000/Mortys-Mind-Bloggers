const Comment = require('../models/comment');

module.exports = {
    index,
    create,
    show,
    update

}

function index(req, res) {
    res.render('comments', {
        Comment,
        user: req.user,
        
        

    }
    )};


function create(req, res) {
    // if (!req.user) res.status(401).send('must log in to access this!!');
    var comment = new Comment(req.body);
    comment.user = req.user.id;
    comment.save(function(err) {
        if(err) return next(err);
        console.log(comment);
        res.redirect(`/comments/${comment._id}`);
    });
}

function show(req, res) {
    Comment.findById(req.params.id, function(err, comment) {
        res.render('showpage', {
            comment,
            user: req.user
        });

    })
}

function update(req, res) {
    Comment.findByIdAndUpdate(id , req.body, function(err, comment) {
        res.render('showpage', comment );

    });
}