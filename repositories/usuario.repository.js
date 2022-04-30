const Usuario = require('../models/usuario.model');

const usuarioGetRepository = async(pagination) => {
    const { limite, pagina } = pagination;

    const [ usuarios, totalRegistros ] = await Promise.all([
        Usuario.find()
                .where('status', true)
                .limit(Number(limite))
                .skip(pagina),
        Usuario.countDocuments().where('status', true)
    ]);

    let res = {
        usuarios,
        totalRegistros
    }

    return res;
}

const usuarioSaveRepository = async(usuario) => {
    const res = await usuario.save();
    return res;
}

const usuarioUpdateRepository = async(id, datos) => {
    const res = await Usuario.findByIdAndUpdate(id, datos, {new: true});
    return res;
}

const usuarioDeleteRepository = async(id) => {
    const res = await Usuario.findByIdAndUpdate(id, {status: false}, {new: true});
    return res;
}

module.exports = {
    usuarioGetRepository,
    usuarioSaveRepository,
    usuarioUpdateRepository,
    usuarioDeleteRepository
}