const { check } = require('express-validator');
const { validarCampos } = require('../../middlewares/validation.middleware');
const { esRolValido, esCorreoExistente, esUsuarioExistente } = require('./usuario.validations');

const usuarioValidationsPost = [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail().normalizeEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    //check('rol', 'El rol es obligatorio').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( esRolValido ),
    check('correo').custom( esCorreoExistente ),
    validarCampos
];

const usuarioValidateId = [
    check('id').custom( esUsuarioExistente ),
    validarCampos
];

module.exports = {
    usuarioValidationsPost,
    usuarioValidateId
}
