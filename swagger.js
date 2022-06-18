/* eslint-disable no-undef */
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API with Swagger by Jermain Lopez'
    },
    host: 'cse341-jermain-clients.herokuapp.com',
    schemes: ['httpS']
};

const outputFile = './swaggerOutput.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);