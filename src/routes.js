const express = require('express')
const controler = require('./controler/playlistControler')


const router = express.Router()

router.get('/', (req,res)=>{res.send("Bem vindo a home")})
router.get('/createPlaylist', controler.renderTemplateCreatePlaylist)
router.post('/createPlaylist', controler.createPlaylist)

module.exports = router