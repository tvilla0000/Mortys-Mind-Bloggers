const Comment = require('../models/comment');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteComment
}

function index(req, res) {
    Comment.find({}, function(err, comments) {
        res.render('comments', {
            user: req.user,
            comments
        })
    });
}

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

// function deleteComment(req, res) {
//     Comment.findByIdAndDelete(id, req.body, function(err, comment) {
//         res.redirect('/comments')
//     })
// }

function deleteComment(req, res) {
    Comment.findByIdAndDelete({'_id': req.params.id})
    .then(comment => {
        res.redirect('/comments');
    })
}