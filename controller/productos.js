const{response}=require('express')
const Productos =require('../models/productos')



const getProductos = async (req, res=response)=>{

    const productos =await Productos.find()
    res.json({
        msg:'GET API Productos',
        productos
    })
}



const postProductos = async(req,res)=>{
    const {idProductos,nombre,descripcion,cantidad}= req.body

    const productos = new Productos({idProductos,nombre,descripcion,cantidad})
    await productos.save()
    res.json({
        msg:'POST API Productos',
        productos
    })
}

const putProductos = async (req,res) =>{

    const {idProductos,nombre,descripcion,cantidad} = req.body
    const productos = await Productos.findOneAndUpdate({idProductos:idProductos,},{nombre:nombre,descripcion:descripcion,cantidad:cantidad})

    res.json({
        msg:"PUT API Productos",
        productos
    })
}

const patchProductos =async(req,res) =>{
    const {idProductos,nombre,descripcion,cantidad}= req.body
    const productos =await Productos.findOneAndUpdate({idProductos:idProductos}, {nombre:nombre})

   res.json({
    msg:"PATCH API Productos",
    productos
   })
}

const deleteProductos = async(req,res)=>{
    const{nombre}= req.query

    const productos =await Productos.findOneAndDelete({nombre:nombre})

    res.json({
        msg:"DELETE API Productos",
        productos
    })
}


module.exports={
    getProductos,
    postProductos,
    putProductos,
    patchProductos,
    deleteProductos

}