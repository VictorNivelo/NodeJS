import { listarCuenta, crearCuenta, actualizarCuenta, eliminarCuenta } from '../controlador/controlador_cuenta.js';
import { Router } from 'express'

const rutas = Router()

// crud de cuenta

// obtener
rutas.get('/cuenta', listarCuenta)

// enviar
rutas.post('/cuenta', crearCuenta);

// actualizar
rutas.put('/cuenta/:id', actualizarCuenta);

// eliminar
rutas.delete('/cuenta/:id', eliminarCuenta);

export default rutas