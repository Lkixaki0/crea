const {Router} = require('express')
const router = Router()

const{  getPedidos,postPedidos,putPedidos,patchPedidos,deletePedidos}=require('../controller/pedidos')

router.get('/',getPedidos)
router.post('/',postPedidos)
router.put('/',putPedidos)
router.delete('/',deletePedidos)
router.patch('/',patchPedidos)


module.exports= router