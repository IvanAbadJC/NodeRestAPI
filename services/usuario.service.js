const encryptString = require('../Utilities/encrypter.utility');
const paginator = require('../Utilities/paginator.utility');
const Usuario = require('../models/usuario.model');
const { 
    usuarioGetRepository,
    usuarioSaveRepository,
    usuarioUpdateRepository,
    usuarioDeleteRepository
    } = require('../repositories/usuario.repository');

const usuarioGetService = async(query) => {
    const pagination = await paginator(query);
    return await usuarioGetRepository(pagination);
}

const usuarioSaveService = async(body) => {
    const usuario = new Usuario( body );

    //Encriptar contraseña
    usuario.password = await encryptString(usuario.password);

    //Guardar en BD
    return await usuarioSaveRepository(usuario);
}

const usuarioUpdateService = async(id, body) => {
    const { _id, correo, password, rol, status, google, ...resto } = body;

    if(password){
        //Encriptar contraseña
        resto.password = await encryptString(password);
    }

    if(correo){ resto.correo = correo; }

    //Guardar en BD
    return usuarioUpdateRepository(id, resto);
}

const usuarioDeleteService = async(id) => {
    return await usuarioDeleteRepository(id);
}

module.exports = {
    usuarioGetService,
    usuarioSaveService,
    usuarioUpdateService,
    usuarioDeleteService
}