const express = require('express');
const routes = require('./routes');
const middleware = require('./middleware');

const app = express();
const port = 3000;

// Middleware para procesar JSON
app.use(express.json());

// Middleware personalizado
app.use(middleware.logger);

// Rutas
app.use('/api', routes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('¡Hola, Express.js!');
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
