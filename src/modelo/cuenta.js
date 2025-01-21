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
    estado_cuenta: {
        type: String,
        required: true,
    },
});

export default mongoose.model('cuenta', cuentaSchema);
