const Comment = require('../models/comment');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteComment,
    editComment

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
    if (!req.user) res.status(401).send('must log in to access this!!');
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

function editComment(req, res) {
    Comment.findById(req.params.id, function(err, foundComment){
        res.render('editcomment', {
            comment: foundComment
        })
    })
}

function update(req, res) {
    Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, comment) {
        res.redirect('/comments');
        if(err) return console.log(err);
    });
}

function deleteComment(req, res) {
    Comment.findByIdAndDelete(req.params.id, function(err, comments) {
        res.redirect('/comments')
    })
}


