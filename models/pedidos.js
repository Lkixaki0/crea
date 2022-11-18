const { Schema, model } = require('mongoose')

const PedidosShema = Schema({
    idPedidos:{
    type: Number
},
idUsuarios:{
    type:Number
},
direccion:{
   type:String

},
telefono:{
    type:Number
}

})

module.exports =model('pedidos',PedidosShema)