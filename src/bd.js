import mongoose from 'mongoose';

export const conectarBD = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/node');
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.log('Error al conectar a la base de datos');
    }
}