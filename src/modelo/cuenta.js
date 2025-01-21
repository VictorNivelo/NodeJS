import mongoose from 'mongoose';

const cuentaSchema = mongoose.Schema({
    correo: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    contrasenia: {
        type: String,
        required: true,
    },
});

export default mongoose.model('cuenta', cuentaSchema);
