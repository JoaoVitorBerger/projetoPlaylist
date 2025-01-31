const playlistControler = require("../model/playlistModel")
const playlist = require("../model/playlistModel")

const controler = {
    renderTemplateCreatePlaylist(req,res){
        const infos = playlistControler.getAllPlaylists()
        res.render('create',{infos})
    },
    createPlaylist(req,res){
        const {name,tags} = req.body
        const tagsValue = tags.split(",")
        playlist.create(name, tagsValue)
        res.redirect('/createPlaylist')
    },
    seeAboutPlaylist(req,res){
        const id = req.params.id
        const data = playlistControler.getPlaylistById(id)
        res.render('about', {data})
    },
    addMusicInPlaylist(req,res){
        const {title,year,artist,album} = req.body
        const id = req.params.id
        playlistControler.insertMusic(id,title,year,artist,album)
        res.redirect(`/see/about/playlist/${id}`)
    },
    renderMusicForm(req,res){
        const id = req.params.id
        res.render('formMusic',{id})
    },
    deletePlaylist(req,res){
        const id = req.params.id
        playlistControler.deletePlaylist(id)
        res.redirect('/createPlaylist')
    },
    editPlaylist(req,res){
        const id = req.params.id
        const data = playlistControler.getPlaylistById(id)
        res.render('edit' , {data})
    },
    confirmEditPlaylist(req,res){
        const {playlistName,...tags} = req.body
        const idPlaylist = req.params.id
        playlistControler.updatePlayst(idPlaylist,playlistName,Object.values(tags))
        res.redirect('/createPlaylist')
    },
    deleteMusic(req,res){
        const {idPlaylist, idMusic} = req.params
        playlistControler.deleteMusic(idPlaylist, idMusic)
        res.redirect(`/see/about/playlist/${idPlaylist}`)
    },
    renderHome(req,res){
        res.render('home')
    }

}

module.exports = controler