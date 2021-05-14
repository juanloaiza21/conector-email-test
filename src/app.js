const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load('./docs/swagger.yml');
const cors =  require('./middlewares/cors')

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const emailRoutes = require("./routes/email");

app.use('/api-docs', cors,swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/email', cors ,emailRoutes);


module.exports = app;