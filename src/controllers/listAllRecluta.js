const Responses = require('../utils/responseUtil');
const Dynamo = require('../utils/dynamodbUtil');
const dotenv = require("dotenv");

dotenv.config();

const tableName = process.env.aws_dynamodb_table;

exports.handler = async event => {

    const items = await Dynamo.scan(tableName).catch(err => {
        console.log('Error con DynamoDB', err);
        return null;
    });

    if (!items) {
        return Responses._404({ message: 'Ocurrio un error al listar los datos' });
    }

    return Responses._200({ items });
};