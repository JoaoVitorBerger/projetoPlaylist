const playlistControler = require("../model/playlistModel")
const playlist = require("../model/playlistModel")

const controler = {
    renderTemplateCreatePlaylist(req,res){
        const infos = playlistControler.getAllPlaylists()
        res.render('create',{infos})
    },
    createPlaylist(req,res){
        const {name,tags} = req.body
        playlist.create(name, tags)
        res.redirect('/createPlaylist')
    }
}

module.exports = controler