const{response}=require('express')
const Usuarios =require('../models/usuarios')



const getUsuarios = async (req, res=response)=>{

    const usuarios =await Usuarios.find()
    res.json({
        msg:'GET API Usuarios',
        usuarios
    })
}



const postUsuarios = async(req,res)=>{
    const {idUsuarios,nombre,apellido,telefono}= req.body

    const usuarios = new Usuarios({idUsuarios,nombre,apellido,telefono})
    await usuarios.save()
    res.json({
        msg:'POST API Usuarios',
        usuarios
    })
}

const putUsuarios = async (req,res) =>{

    const {idUsuarios,nombre,apellido,telefono} = req.body
    const usuarios = await Usuarios.findOneAndUpdate({idUsuarios:idUsuarios,},{nombre:nombre,apellido:apellido,telefono:telefono})

    res.json({
        msg:"PUT API Usuarios",
        usuarios
    })
}

const patchUsuarios =async(req,res) =>{
    const {idUsuarios,nombre,apellido,telefono}= req.body
    const usuarios =await Usuarios.findOneAndUpdate({idUsuarios:idUsuarios}, {telefono:telefono})

   res.json({
    msg:"PATCH API Productos",
    usuarios
   })
}

const deleteUsuarios = async(req,res)=>{
    const{nombre}= req.query

    const usuarios =await Usuarios.findOneAndDelete({nombre:nombre})

    res.json({
        msg:"DELETE API Usuarios",
        usuarios
    })
}


module.exports={
    getUsuarios,
    postUsuarios,
    putUsuarios,
    patchUsuarios,
    deleteUsuarios

}