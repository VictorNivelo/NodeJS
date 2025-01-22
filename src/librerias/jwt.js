import { token_secreto } from '../configuracion.js';
import jwt from 'jsonwebtoken';

export function crearToken(payload) {
    // promesa para crear un token
    return new Promise((resolve, reject) => {
        // creacion de un token
        jwt.sign(payload, token_secreto, { expiresIn: "1h" }, (error, token) => {
            if (error) {
                // mensaje de error
                reject(error);
                console.log(error);
            }
            else {
                // envia el token
                resolve(token);
            }
        });
    });
}