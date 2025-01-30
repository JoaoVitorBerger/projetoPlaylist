const express = require('express')
const controler = require('./controler/playlistControler')


const router = express.Router()

router.get('/', controler.renderHome)
router.get('/createPlaylist', controler.renderTemplateCreatePlaylist)
router.get('/see/about/playlist/:id', controler.seeAboutPlaylist)
router.get('/add/music/:id', controler.renderMusicForm)
router.get('/edit/playlist/info/:id', controler.editPlaylist)

router.post('/add/music/:id', controler.addMusicInPlaylist)
router.post('/delete/playlist/:id', controler.deletePlaylist)
router.post('/edit/playlist/info/:id', controler.confirmEditPlaylist)
router.post('/delete/:idPlaylist/music/:idMusic', controler.deleteMusic)
router.post('/createPlaylist', controler.createPlaylist)
module.exports = router