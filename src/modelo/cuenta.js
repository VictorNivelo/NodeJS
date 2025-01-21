import estado_cuenta from './enum/estado_cuenta.js';
import tipo_cuenta from './enum/tipo_cuenta.js';
import mongoose from 'mongoose';

const cuentaSchema = new mongoose.Schema({
    correo: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    contrasenia: {
        type: String,
        required: true,
    },
    tipo_cuenta: {
        type: String,
        required: true,
        enum: Object.values(tipo_cuenta),
    },
    estado_cuenta: {
        type: String,
        required: true,
        enum: Object.values(estado_cuenta),
    },
});

export default mongoose.model('cuenta', cuentaSchema);
