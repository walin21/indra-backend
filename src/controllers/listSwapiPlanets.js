const swapiPlanetModel = require("../models/swapiPlanet.model");
const axios = require('axios');

exports.handler = async (event, context, callback) => {
    let dataInfo = await convertDataAPI();
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Datos del servicio swapi",
            data: dataInfo,
        }, null, 2)
    };
    callback(null, response);
};

async function convertDataAPI(){
    return new Promise(async (resolve, reject) =>{
        await axios.get('https://swapi.py4e.com/api/planets')
            .then(async (result) => {
                const new_array = [];
                await result.data.results.forEach((data) => {
                    new_array.push(swapiPlanetModel.planeta_model(data));
                });
                resolve(new_array);
            })
            .catch(error => {
                reject(error);
            });
    });
};