import mongoose from 'mongoose';

const usuarioSchema = mongoose.Schema({
    tipo_dni: {
        type: String,
        required: true
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
        required: true
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

export default mongoose.model('usuario', usuarioSchema);