const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    caption: String,
    
}, {
    timestamp: true
});

module.exports = mongoose.model('Comment', commentSchema);


