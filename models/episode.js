const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
    season: {
        type: Number,
        min: 1,
        max: 3,
        required: true
    },
    episode: {
        type: Number,
        min:1,
        max: 15,
        required: true
    }

})

module.exports = mongoose.model('Episode', episodeSchema);