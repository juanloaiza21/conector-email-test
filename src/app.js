const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load('./docs/swagger.yml');
const cors =  require('cors');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());

const emailRoutes = require("./routes/email");

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', emailRoutes);


module.exports = app;