import Usuario from '../modelo/usuario.js';
import Cuenta from '../modelo/cuenta.js';

// envio de html
export const registro = (req, res) => { res.render('usuario/registro') };

export const inicio_sesion = (req, res) => { res.render('usuario/inicio_sesion') };

// envio de mensaje

// export const registro = (req, res) => { res.send('Registro') };

// export const inicio_sesion = (req, res) => { res.send('Inicio de sesion') };