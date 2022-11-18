const { Schema, model } = require('mongoose')

const ProductoShema = Schema({
    idProductos:{
    type: Number
},
nombre:{
    type:String
},
descripcion:{
   type:String

},
cantidad:{
    type:Number
}

})

module.exports =model('productos',ProductoShema)