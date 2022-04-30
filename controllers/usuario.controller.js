const { 
        usuarioGetService,
        usuarioSaveService, 
        usuarioUpdateService,
        usuarioDeleteService
    } = require('../services/usuario.service');

const usuariosGet = async(req, res) => {
    const resp = await usuarioGetService(req.query);
    res.json({
        resp
    });
}

const usuariosPost = async(req, res) => {
    const body = req.body;
    const resp = await usuarioSaveService(body);
    res.json({
        resp
    });
}

const usuariosPut = async(req, res) => {
    const { id } = req.params;
    const resp = await usuarioUpdateService(id, req.body);

    res.json({
        resp
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'response patch'
    });
}

const usuariosDelete = async(req, res) => {
    const { id } = req.params;
    const resp = await usuarioDeleteService(id);
    res.json({
        resp
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}