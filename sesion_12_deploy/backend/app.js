const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const dataStore = [];

app.get('/data', (req, res) => {
    res.json(dataStore);
});

app.post('/data', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        dataStore.push({ name, email });
        res.status(201).send('Datos guardados');
    } else {
        res.status(400).send('Faltan datos');
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
