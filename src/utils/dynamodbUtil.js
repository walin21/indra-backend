const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

const documentClient = new AWS.DynamoDB.DocumentClient({region: process.env.aws_region});

const Dynamo = {
    async scan(TableName) {
        const params = {
            TableName,
        };
        const data = await documentClient.scan(params).promise();
        return data.Items;
    },

    async write(data, TableName) {
        if (!data.id) {
            throw Error('No hay un ID en los datos.');
        }
        const params = {
            TableName,
            Item: data,
        };
        const res = await documentClient.put(params).promise();
        if (!res) {
            throw Error(`Hubo un error al insertar el ID ${data.ID} en la tabla ${TableName}`);
        }
        return data;
    },
};
module.exports = Dynamo;