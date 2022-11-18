const{response}=require('express')
const Pedidos =require('../models/pedidos')



const getPedidos = async (req, res=response)=>{

    const pedidos =await Pedidos.find()
    res.json({
        msg:'GET API Pedidos',
        pedidos
    })
}



const postPedidos = async(req,res)=>{
    const {idPedidos,idUsuarios,direccion,telefono}= req.body

    const pedidos = new Pedidos({idPedidos,idUsuarios,direccion,telefono})
    await pedidos.save()
    res.json({
        msg:'POST API Pedidos',
        pedidos
    })
}

const putPedidos = async (req,res) =>{

    const {idPedidos,idUsuarios,direccion,telefono} = req.body
    const pedidos = await Pedidos.findOneAndUpdate({idUsuaridPedidosios:idPedidos,},{idUsuarios:idUsuarios,direccion:direccion,telefono:telefono})

    res.json({
        msg:"PUT API Pedidos",
        pedidos
    })
}

const patchPedidos =async(req,res) =>{
    const {idPedidos,idUsuarios,direccion,telefono}= req.body
    const pedidos =await Pedidos.findOneAndUpdate({idPedidos:idPedidos}, {direccion:direccion})

   res.json({
    msg:"PATCH API Pedidos",
    pedidos
   })
}

const deletePedidos = async(req,res)=>{
    const{idUsuarios}= req.query

    const pedidos =await Pedidos.findOneAndDelete({idUsuarios:idUsuarios})

    res.json({
        msg:"DELETE API Pedidos",
        pedidos
    })
}


module.exports={
    getPedidos,
    postPedidos,
    putPedidos,
    patchPedidos,
    deletePedidos

}