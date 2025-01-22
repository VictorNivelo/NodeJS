import Persona from '../modelo/persona.js';
import Cuenta from '../modelo/cuenta.js';

export const registro = async (req, res) => {
    // construccion de una nueva cuenta
    const { correo, contrasenia, tipo_cuenta, estado_cuenta } = req.body;

    try {
        // validacion de la existencia de una cuenta
        const cuentaExistente = await Cuenta.findOne({ correo });

        if (cuentaExistente) {
            // mensaje de respuesta en consola
            console.log('Ya existe una cuenta con ese correo');
            return res.status(400).json({
                mensaje: 'Ya existe una cuenta con ese correo'
            });
        }

        // creacion de una cuenta
        const cuenta = new Cuenta({
            correo,
            contrasenia,
            tipo_cuenta,
            estado_cuenta
        });

        // mostrar la cuenta en consola
        console.log(cuenta);

        // guardado en la base de datos
        await cuenta.save();

        // creacion de una persona
        const persona = new Persona({
            tipo_dni,
            numero_dni,
            nombre,
            apellido,
            correo_personal,
            genero,
            fecha_nacimiento,
            telefono,
            direccion,
            cuenta: cuenta._id
        });

        // mostrar la persona en consola
        console.log(persona);

        // guardado de la persona en la base de datos
        await persona.save();

        // mensaje de respuesta en consola
        console.log('Cuenta registrada');

        // mensaje de respuesta
        res.send('Cuenta registrada');
    }
    catch (error) {
        console.log('Error al registrar', error);
        res.status(500).send('Error al registrar');
    }
};

export const inicio_sesion = (req, res) => { res.send('Inicio de sesion') };

// envio de html
// export const registro = (req, res) => { res.render('usuario/registro') };

// export const inicio_sesion = (req, res) => { res.render('usuario/inicio_sesion') };

// envio de mensaje

// export const registro = (req, res) => { res.send('Registro') };

// export const inicio_sesion = (req, res) => { res.send('Inicio de sesion') };