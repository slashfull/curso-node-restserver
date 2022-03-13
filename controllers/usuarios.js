const {response} = require('express');

const usuarioGet = (req=request, res=response) => {
    const {nombre,edad} = req.query;
    res.json({
        msg: 'get API - Controlador',
        nombre,edad
    });
}

const usuariosPut = (req, res=response) => {
    const id = req.params.id;
    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const usuariosPost = (req, res=response) => {
    const body = req.body;
    res.json({
        msg: 'post API - Controlador',
        body
    });
}

const usuariosDelete = (req, res=response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}

const usuariosPatch = (req, res=response) => {
    res.json({
        msg: 'patch API - Controlador'
    });
}

module.exports = {
    usuarioGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}