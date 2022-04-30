const { Router } = require('express');
const { usuarioValidationsPost, 
        usuarioValidateId
    } = require('../Utilities/validations/validations');

const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
} = require('../controllers/usuario.controller');

const router = Router();

router.get('/api/usuarios', usuariosGet);
router.post('/api/usuarios', usuarioValidationsPost, usuariosPost);
router.put('/api/usuarios/:id', usuarioValidateId, usuariosPut);
router.patch('/api/usuarios', usuariosPatch);
router.delete('/api/usuarios/:id', usuarioValidateId, usuariosDelete);



module.exports = router;