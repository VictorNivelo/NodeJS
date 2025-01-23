import { listarCuenta, crearCuenta, actualizarCuenta, eliminarCuenta } from '../controlador/controlador_cuenta.js';
import { Router } from 'express'

const rutas = Router()

// crud cuenta
rutas.get('/cuenta', listarCuenta)
rutas.post('/cuenta', crearCuenta);
rutas.put('/cuenta/:id', actualizarCuenta);
rutas.delete('/cuenta/:id', eliminarCuenta);

export default rutas