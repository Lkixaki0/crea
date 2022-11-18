const {Router} = require('express')
const router = Router()

const{getProductos,postProductos,putProductos,deleteProductos,patchProductos}=require('../controller/productos')

router.get('/',getProductos)
router.post('/',postProductos)
router.put('/',putProductos)
router.delete('/',deleteProductos)
router.patch('/',patchProductos)


module.exports= router