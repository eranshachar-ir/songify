var express = require('express');
var SongController = require('./controllers/SongController');

var router = express.Router();

var defineRoutes = router =>{
    router.get('/song/:_id',async function(req,res) {
        let song = await SongController.getSong(req.params._id);
        res.status(song?200:400).send(song);
    });

    router.get('/song',async function(req,res) {
        let collection = await SongController.getSongCollection();
        res.status(collection?200:400).send(collection);
    });

    router.delete('/song',async function(req,res) {
        let song = await SongController.deleteSong(req.body._id);
        res.status(song?200:400).send(song);
    });

    router.post('/song',async  function(req,res) {
        let song =  await SongController.createSong(req.body);
        res.status(song?200:400).send(song);
    });

    router.put('/song',async  function(req,res) {
        let song =await SongController.updateSong(req.body);

        res.status(song?200:400).send(song);

    });
    return router;
};

module.exports = defineRoutes(router);