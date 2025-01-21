import mongoose from 'mongoose';

export const conectarBD = async () => {
    try {
        // Conexión a la base de datos
        await mongoose.connect('mongodb://localhost/node');

        // Mensaje de éxito
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        // Mensaje de error
        console.log('Error al conectar a la base de datos', error);
    }
};