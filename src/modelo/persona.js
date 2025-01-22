import tipo_dni from './enum/tipo_dni.js';
import genero from './enum/genero.js';
import mongoose from 'mongoose';

const personaSchema = new mongoose.Schema({
    tipo_dni: {
        type: String,
        required: true,
        enum: Object.values(tipo_dni),
    },
    numero_dni: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    genero: {
        type: String,
        required: true,
        enum: Object.values(genero),
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
});

export default mongoose.model('persona', personaSchema);