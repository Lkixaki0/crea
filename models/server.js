const express = require('express')
const cors = require('cors')
const dbconnection = require('../database/config')

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.ProductosPatch = "/api/productos"
        this.UsuariosPatch = "/api/usuarios"
        this.pedidosPatch = "/api/pedidos"
      
        this.middlewares()
        this.routes()
        this.dbconectar()
    }


    async dbconectar(){
        await dbconnection()
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.static("public"))
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.ProductosPatch,require("../routes/productos"))
        this.app.use(this.UsuariosPatch,require("../routes/usuarios"))
        this.app.use(this.pedidosPatch,require("../routes/pedidos"))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`escuchando desde el puerto ${this.port}`)
        })
    }

}
module.exports = Server
