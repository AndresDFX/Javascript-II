require('dotenv').config({ path: '../.env' });
const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI; 

async function run() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection('estudiantes');
        const resultado = await collection.insertOne({ nombre: 'Juan', edad: 25, prueba: "holi"});
        console.log('Documento insertado:', resultado);
    } catch (error) {
        console.error('Error al insertar:', error.message);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
