var mongoose = require('mongoose');


var SongSchema = mongoose.Schema({
    name:       String,
    genre:      String,
    artist:     String,
    time:       String,
});

module.exports = mongoose.model('Song',SongSchema); // song