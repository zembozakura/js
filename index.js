import express from 'express';
import config from './config.js';
import mongoose from 'mongoose';
import configureDependencies from './configure.dependencies.js';
import configureMiddlewares from './middlewares/config_middleware.js';

if (!config.jwtKey){
    console.error(`No se ha definido un jwtKey en la configuración. Por favor creer un archivo config.local.js segun se especifica en su config.js.`);
    process.exit(1);
}

console.log(config.dbConnection);
mongoose.connect(config.dbConnection)
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(error => console.error('Error al conectar:', error));

const app = express();
configureMiddlewares(app);
configureDependencies();

const PORT = 3000;
app.listen(
    PORT, 
    () => {
    console.log(`Servidor corriendo en http://localhost:${config.port}`);
    }
);

console.log('backend');