const Responses = require('../utils/responseUtil');
const Dynamo = require('../utils/dynamodbUtil');
const reclutaModel = require('../models/recluta.model');
const dotenv = require('dotenv');

dotenv.config();

const tableName = process.env.aws_dynamodb_table;

exports.handler = async event => {

    const obj = await reclutaModel.recluta_model(JSON.parse(event.body));

    const newRecluta = await Dynamo.write(obj, tableName).catch(err => {
        console.log('Error en el registro con dynamoDB', err);
        return null;
    });

    if (!newRecluta) {
        return Responses._400({ message: 'No se pudo registrar por ID' });
    }

    return Responses._200({ newRecluta });
};