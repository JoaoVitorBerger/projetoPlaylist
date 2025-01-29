const express = require('express')
const controler = require('./controler/playlistControler')


const router = express.Router()

router.get('/', (req,res)=>{res.send("Bem vindo a home")})
router.get('/createPlaylist', controler.renderTemplateCreatePlaylist)
router.post('/createPlaylist', controler.createPlaylist)
router.get('/see/about/playlist/:id', controler.seeAboutPlaylist)
router.get('/add/music/:id', controler.renderMusicForm)
router.post('/add/music/:id', controler.addMusicInPlaylist)

module.exports = router