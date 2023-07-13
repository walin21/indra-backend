const modelRecluta = {};
const uuid = require('uuid');

modelRecluta.recluta_model = async (objeto) => {
    try {
        const timestamp = new Date().getTime();
        return {
            id: uuid.v1(),
            nombre: objeto.nombre,
            apellido: objeto.apellido,
            direccion: objeto.direccion,
            genero: objeto.genero,
            email: objeto.email,
            telefono: objeto.telefono,
            profesion: objeto.profesion,
            cargo: objeto.cargo,
            submittedAt: timestamp,
            updatedAt: timestamp,
        };
    } catch (error) {
        return res.json({status: 0, message: 'Ocurrio un error al procesar la información'});
    }
};

module.exports = modelRecluta;