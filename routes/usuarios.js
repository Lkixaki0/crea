const {Router} = require('express')
const router = Router()

const{  getUsuarios,postUsuarios,putUsuarios,patchUsuarios,deleteUsuarios}=require('../controller/usuarios')

router.get('/',getUsuarios)
router.post('/',postUsuarios)
router.put('/',putUsuarios)
router.delete('/',deleteUsuarios)
router.patch('/',patchUsuarios)


module.exports= router