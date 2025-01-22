const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const PORT = 5000;

// Configuration de Swagger
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'My Hello World API',
    version: '1.0.0',
    description: 'Une API simple pour tester Swagger avec Node.js et Express',
  },
  servers: [
    {
      url: `http://localhost:${PORT}`,
      description: 'Serveur local',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./server.js'], // Le fichier à documenter
};

const swaggerSpec = swaggerJSDoc(options);

// Serveur de la documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Route principale
app.get('/', (req, res) => {
  res.send('Hello World from Backend!');
});

// Route pour vérifier l'état de santé de l'application
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
