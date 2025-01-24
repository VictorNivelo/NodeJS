import { token_secreto } from '../configuracion.js';
import jwt from 'jsonwebtoken';

export const autorizacion_requerida = (req, res, next) => {
    // obtener el token
    const token = req.cookies.token;

    // si no hay token
    if (!token) {
        // redireccionar a la vista de inicio de sesion
        return res.redirect('/inicio_sesion');
    }

    // verificar el token
    jwt.verify(token, token_secreto, (error, decoded) => {
        // si hay un error
        if (error) {
            // redireccionar a la vista de inicio de sesion
            return res.redirect('/inicio_sesion');
        }

        // añadir la información decodificada a req.usuario
        req.usuario = decoded;

        // continuar con la ejecucion
        next();
    });
}