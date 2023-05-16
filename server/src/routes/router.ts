import express from 'express'
import specialtyRouter from './specialtyRouter'
import healthCheckRouter from './healthCheckRouter'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
const router = express.Router()

router.use('/health-check', healthCheckRouter)

router.use('/specialty', specialtyRouter)

// Configuración de Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Ejemplo',
      version: '1.0.0',
      description: 'Documentación de la API de Ejemplo',
    },
    servers: [
      {
        url: 'http://localhost:5000', // Reemplaza con la URL de tu servidor
      },
    ],
  },
  apis: ['router.ts'], // Archivo que contiene las rutas
};

const specs = swaggerJsdoc(options);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default router
