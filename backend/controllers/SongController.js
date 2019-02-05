const Song = require('../models/Song');


class SongController {
    static async getSongCollection() {
        var result = null;
        result = await Song.find(err => {
            if (err) {
                console.log(err);
            }
        });
        return result;
    };

    static async createSong(body) {
        var song = new Song(body);

        await song.save((err,s) => {
            if (err) {
                song = err;
                console.log(err);
            }
        });
        return song;
    };

    static async getSong(id) {
        let result = null;
        await Song.findById(id).then(song => {
            if (song)
                result = song;
            else
                result = {"ERROR": "Song not found"};
        }).catch(err => {
            result = err;
        });
        return result;
    };


    static async deleteSong(id) {
        let result = {msg:"OK"};
        await Song.deleteOne({"_id":id}, function (err) {
            if (err) {
                result=err;
            }
        });
        return result;
    };

    static async updateSong(body) {
        console.log(body);
        let result ={msg:"Done"};
        await Song.findByIdAndUpdate(body._id, body, {new: true}, (err, song) => {
                // Handle any possible database errors
                if (err) result=err;
            });
        return result;


    }


}

module.exports = SongController;