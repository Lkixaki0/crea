const { Schema, model } = require('mongoose')

const UsuariosShema = Schema({
    idUsuarios:{
    type: Number
},
nombre:{
    type:String
},
apellido:{
   type:String

},
telefono:{
    type:Number
}

})

module.exports =model('usuarios',UsuariosShema)