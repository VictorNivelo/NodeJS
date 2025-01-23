import estado_cuenta from '../modelo/enum/estado_cuenta.js';
import tipo_cuenta from '../modelo/enum/tipo_cuenta.js';
import Cuenta from '../modelo/cuenta.js';
import bcrypt from 'bcryptjs';

// metodo para mostrar las cuentas
export const listarCuenta = async (req, res) => {
    try {
        // Obtener todas las cuentas
        const cuentas = await Cuenta.find();
        // Renderizar la vista de cuentas
        res.render('crud/cuenta', {
            cuentas,
            tipos_cuenta: Object.values(tipo_cuenta),
            estados_cuenta: Object.values(estado_cuenta)
        });
    } catch (error) {
        // mensaje de error en consola
        console.log('Error al listar cuentas', error);
        // mensaje de error para el frontend
        res.status(500).json({
            mensaje: 'Error al listar cuentas',
            error: error.message
        });
    }
};

// metodo para crear una cuenta
export const crearCuenta = async (req, res) => {
    try {
        // obtener los datos de la cuenta
        const { correo, contrasenia, tipo_cuenta, estado_cuenta } = req.body;

        // validacion de la existencia de una cuenta
        const cuentaExistente = await Cuenta.findOne({ correo });

        // si existe una cuenta con el correo
        if (cuentaExistente) {
            return res.status(400).json({
                mensaje: 'Ya existe una cuenta con ese correo'
            });
        }

        // encriptacion de la contraseña
        const encriptarContrasenia = await bcrypt.hash(contrasenia, 10);

        // creacion de una nueva cuenta
        const nuevaCuenta = new Cuenta({
            correo,
            contrasenia: encriptarContrasenia,
            tipo_cuenta,
            estado_cuenta
        });

        // guardado en la base de datos
        await nuevaCuenta.save();

        // redireccionar a la vista de cuentas
        res.redirect('/cuenta');
    } catch (error) {
        // mensaje de error en consola
        console.log('Error al crear cuenta', error);
        // mensaje de error para el frontend
        res.status(500).json({
            mensaje: 'Error al crear la cuenta',
            error: error.message
        });
    }
};

// metodo para actualizar una cuenta
export const actualizarCuenta = async (req, res) => {
    try {
        // obtener el id de la cuenta
        const { id } = req.params;

        // obtener los datos de la cuenta
        const { correo, tipo_cuenta, estado_cuenta } = req.body;

        // validacion de la existencia de una cuenta
        const cuentaExistente = await Cuenta.findOne({
            correo,
            _id: { $ne: id }
        });

        // si existe una cuenta con el correo
        if (cuentaExistente) {
            // mensaje de respuesta para el frontend
            return res.status(400).json({
                mensaje: 'El correo ya está en uso por otra cuenta'
            });
        }

        // actualizar la cuenta
        await Cuenta.findByIdAndUpdate(id, {
            correo,
            tipo_cuenta,
            estado_cuenta
        });

        // redireccionar a la vista de cuenta
        res.redirect('/cuenta');

    } catch (error) {
        // mensaje de error en consola
        console.log('Error al actualizar cuenta', error);
        // mensaje de error para el frontend
        res.status(500).json({
            mensaje: 'Error al actualizar la cuenta',
            error: error.message
        });
    }
};

// metodo para eliminar una cuenta
export const eliminarCuenta = async (req, res) => {
    try {
        // obtener el id de la cuenta
        const { id } = req.params;
        // eliminar la cuenta
        await Cuenta.findByIdAndDelete(id);
        // redireccionar a la vista de cuentas
        res.redirect('/cuenta');
    } catch (error) {
        // mensaje de error en consola
        console.log('Error al eliminar cuenta', error);
        // mensaje de error para el frontend
        res.status(500).json({
            mensaje: 'Error al eliminar cuenta',
            error: error.message
        });
    }
};