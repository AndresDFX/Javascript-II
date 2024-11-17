const express = require('express');
const router = express.Router();

// Obtener todos los productos
router.get('/productos', (req, res) => {
    res.json([{ id: 1, nombre: 'Laptop' }, { id: 2, nombre: 'Mouse' }]);
});

// Crear un producto
router.post('/productos', (req, res) => {
    const nuevoProducto = req.body;
    console.log('Producto recibido:', nuevoProducto);
    res.status(201).json({ mensaje: 'Producto creado', producto: nuevoProducto });
});

module.exports = router;
