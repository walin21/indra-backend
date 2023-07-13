const modelSwapiPlanet = {};

modelSwapiPlanet.planeta_model = (objeto) => {
    try {
        return {
            nombre: objeto.name,
            periodo_rotacion: objeto.rotation_period,
            periodo_orbital: objeto.orbital_period,
            diametro: objeto.diameter,
            clima: objeto.climate,
            gravedad: objeto.gravity,
            terreno: objeto.terrain,
            superficie_agua: objeto.surface_water,
            poblacion: objeto.population,
            residentes: objeto.residents,
            peliculas: objeto.films,
            creado: objeto.created,
            editado: objeto.edited,
            url: objeto.url
        };
    } catch (error) {
        return res.json({status: 0, message: 'Ocurrio un error al procesar la información'});
    }
};

module.exports = modelSwapiPlanet;