import tipo_cuenta from '../modelo/enum/tipo_cuenta.js';
import { crearToken } from '../librerias/jwt.js';
import Persona from '../modelo/persona.js';
import Cuenta from '../modelo/cuenta.js';
import bcrypt from 'bcryptjs';

export const registro = async (req, res) => {

    // si es get se renderiza la vista de registro
    if (req.method === 'GET') {
        // Obtener los tipos de cuenta
        const tiposCuenta = Object.values(tipo_cuenta);
        // Renderizar la vista de registro
        return res.render('usuario/registro', {
            // Pasar los tipos de cuenta a la vista
            tipos_cuenta: tiposCuenta
        });
    }

    console.log(tipo_cuenta);

    // construccion de una nueva cuenta
    const { correo, contrasenia, tipo_cuenta: tipoCuenta, estado_cuenta } = req.body;

    try {

        // // validacion de los campos
        // if (!correo || !contrasenia || !tipoCuenta) {
        //     return res.status(400).json({
        //         // mensaje de respuesta para el frontend
        //         mensaje: 'Todos los campos son requeridos'
        //     });
        // }
        
        // validacion de la existencia de una cuenta
        const cuentaExistente = await Cuenta.findOne({ correo });

        if (cuentaExistente) {
            // mensaje de respuesta en consola
            console.log('Ya existe una cuenta con ese correo');
            return res.status(400).json({
                // mensaje de respuesta para el frontend
                mensaje: 'Ya existe una cuenta con ese correo'
            });
        }

        // encriptacion de la contraseña
        const encriptarContrasenia = await bcrypt.hash(contrasenia, 10);

        // creacion de una cuenta
        const cuenta = new Cuenta({
            correo,
            contrasenia: encriptarContrasenia,
            tipo_cuenta: tipoCuenta,
            estado_cuenta: estado_cuenta || 'Activo'
        });

        // mostrar la cuenta en consola
        console.log(cuenta);

        // guardado en la base de datos
        const cuentaGuardada = await cuenta.save();

        // validacion de la existencia de una persona
        // const personaExistente = await Persona.findOne({ numero_dni });

        // if (personaExistente) {
        //     // mensaje de respuesta en consola
        //     console.log('Ya existe una persona con ese número de DNI');
        //     return res.status(400).json({ 
        //         mensaje: 'Ya existe una persona con ese número de DNI' 
        //     });
        // }

        // // creacion de una persona
        // const persona = new Persona({
        //     tipo_dni,
        //     numero_dni,
        //     nombre,
        //     apellido,
        //     correo_personal,
        //     genero,
        //     fecha_nacimiento,
        //     telefono,
        //     direccion,
        //     cuenta: cuenta._id
        // });

        // // mostrar la persona en consola
        // console.log(persona);

        // // guardado de la persona en la base de datos
        // await persona.save();

        // mensaje de respuesta en consola

        // // mensaje de respuesta
        // res.send('Cuenta registrada');

        // // respuesta en formato json
        // res.json(cuentaGuardada);

        // // respuesta en json con mensaje
        // res.status(201).json({
        //     mensaje: 'Cuenta registrada exitosamente',
        //     cuenta: cuentaGuardada
        // });

        // creacion de un token
        const token = await crearToken({ id: cuentaGuardada._id, correo: cuentaGuardada.correo });

        // respuesta mediante cookie
        res.cookie("token", token)

        // respuesta del token en consola
        console.log('Token generado', token);

        // mandar al inicio de sesion
        res.redirect('/inicio_sesion');

        // respuesta en formato json
        // res.json({
        //     mensaje: "Cuenta registrada exitosamente",
        // });

        // mensaje de respuesta en consola
        console.log('Cuenta registrada exitosamente');
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