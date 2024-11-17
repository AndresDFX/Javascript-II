require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Estudiante = require('./models/Estudiante');

// Verificar la URI
console.log('Mongo URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar:', err));

mongoose.connection.on('error', (err) => {
    console.error('Error en la conexión:', err.message);
});

mongoose.connection.once('open', () => {
    console.log('Conexión establecida correctamente.');
});

async function run() {
    try {
        const nuevoEstudiante = new Estudiante({ nombre: 'Ana', edad: 22 });
        await nuevoEstudiante.save();
        console.log('Estudiante guardado:', nuevoEstudiante);
    } catch (error) {
        console.error('Error al guardar el estudiante:', error.message);
    }
}

run();
