const express = require('express');
app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

//Conexion a BBDD
const db = require('./config/db');
require('dotenv').config({path: 'variables.env'});
require('./models/Productos');
db.sync() 
  .then(() => console.log("Conectado a BBDD"))
  .catch(error => console.log(error));

// bodyparser
app.use(bodyParser.json());

// static files
app.use(express.static('public'));

// morgan
app.use(morgan('dev'));

// rutas
app.use('/',routes());

const port = process.env.PORT || 5000;
const host = process.env.HOST || '0.0.0.0';


app.listen(port,host,() => {
    console.log(`Server on port ${port}`);
});