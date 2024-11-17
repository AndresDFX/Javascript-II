require('dotenv').config({ path: '../.env' });
const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI; 

async function run() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db('test');
        const collection = database.collection('estudiantes');
        const estudiantes = await collection.find({ edad: { $gte: 18 } }).toArray();
        console.log('Estudiantes encontrados:', estudiantes);
    } catch (error) {
        console.error('Error al buscar:', error.message);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
