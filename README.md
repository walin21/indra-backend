# recluta-service
Proyecto creado con serverless aws-node

####  Pruebas en localhost
1. Para realizar las pruebas de la aplicación en node, se tiene que clonar el proyecto.
2. Una vez clonado el proyecto creamos el archivo `.env` y asignamos los valores de las constantes que se encuentran en el archivo `.env-example`
3. Una vez hecho los pasos anteriores ejecutamos el siguiente codigo en la consola.
`npm install dynamodb install`
4. Una vez ya instalado todad las dependencias, ejecutamos el siguiente codigo para poder ejecutar la aplicación en localhost:
`serverless offline start`
5. Una vez ejecutado la aplicación en localhost, nos muestra 3 endpoints, cada una de ellas tiene una función en específico:
- POST:
`http://localhost:3000/dev/recluta`
-- Permite crear un registro con los siguientes objetos:
`{
    "nombre": "Eduardo",
    "apellido": "Tolentino",
    "direccion": "Lima 321",
    "genero": "Masculino",
    "email": "email@gmail.com",
    "telefono": "987654321",
    "profesion": "Ing. de Sistemas",
    "cargo": "Analista de Sistemas"
}`

- GET:
`http://localhost:3000/dev/recluta`
-- Lista todos los registros creados con el endpoint POST.

- GET
`http://localhost:3000/dev/swapiservice`
-- Lista los registros del servicio SWAPI.

####  Pruebas en AWS
1. Se tiene que configurar las credenciales de AWS con el siguiente codigo desde un terminal.
`serverless config credentials --provider aws --key {KEY} --secret {SECRET} --profile {PROFILE}`
2. Cuando ya se tenga configurado el usuario de AWS ejecutamos el siguiente codigo desde el terminal.
`serverless deploy` ó `yarn deploy`.
3. Cuando se ternime de ejecutar podemos ver que los endpoints se crearon a continuación:
- POST:
`https://{URL-AWS}/dev/recluta`
- GET:
`https://{URL-AWS}/dev/recluta`
- GET:
`https://{URL-AWS}/dev/swapiservice`
