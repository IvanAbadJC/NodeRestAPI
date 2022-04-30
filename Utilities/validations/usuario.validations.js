const Usuario = require('../../models/usuario.model');
const Role = require('../../models/role.model');
const { default: mongoose } = require('mongoose');

const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if(!existeRol){
        throw new Error(`El rol ${rol} no existe en la BD.`);
    }
}

const esCorreoExistente = async(correo = '') => {
    const existeCorreo = await Usuario.findOne({correo: correo});
    if(existeCorreo){
        throw new Error(`El correo ${correo} ya se encuentra registrado, utiliza uno diferente.`);
    }
}

const esUsuarioExistente = async(id) => {
    if(!mongoose.Types.ObjectId.isValid(id)){
        throw new Error(`El ID: ${id} no es válido.`);
    }
    const existeUsuario = await Usuario.findById(id);

    if(!existeUsuario){
        throw new Error(`El usuario con ID: ${id} no existe.`);
    }
}

module.exports = {
    esRolValido,
    esCorreoExistente,
    esUsuarioExistente
}