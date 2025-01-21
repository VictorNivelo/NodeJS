import { registro, inicio_sesion } from '../controlador/autentificacion.controlador.js'
import { Router } from 'express'

const rutas = Router()

// obtener
rutas.get('/registro', registro)
rutas.get('/inicio_sesion', inicio_sesion)

// enviar
rutas.post('/registro', registro)
rutas.post('/inicio_sesion', inicio_sesion)

// exportar las rutas
export default rutas