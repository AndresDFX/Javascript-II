const fs = require('fs');

fs.writeFile('archivo.txt', '¡Hola, archivo!', (err) => {
    if (err) throw err;
    console.log('Archivo creado exitosamente.');

    fs.readFile('archivo.txt', 'utf8', (err, datos) => {
        if (err) throw err;
        console.log('Contenido del archivo:', datos);
    });
});
