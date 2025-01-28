const express = require("express")
const path = require("node:path")
const router = require("./routes")

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'view'))
app.use(express.urlencoded({extended:true}))
app.use(router)


app.listen(3000, ()=>{
    console.log("Servidor conectado")
})

