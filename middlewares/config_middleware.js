import express from 'express';
import { logMiddleware } from './log_middleware.js';
import { errorHandlerMiddleware } from './error_handler_middleware.js';  
import { controllers } from '../controllers/controllers.js';
import { authorizationMiddleware } from './authorization_middleware.js';

export default function configureMiddlewares(app) {
    const router = express.Router();
    app.use('/api', router);

    // Middleware para parsear JSON
    router.use(express.json());

    // Middleware de log
    router.use(logMiddleware);
    router.use (authorizationMiddleware);

    // Rutas de los controladores
    controllers(router);

    // Middleware de manejo de errores
    router.use(errorHandlerMiddleware);
}