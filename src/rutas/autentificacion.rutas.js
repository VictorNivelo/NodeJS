import { Router } from 'express'
import { registro, inicio_sesion } from '../controlador/autentificacion.controlador.js'

const rutas = Router()

rutas.post('/registro', registro)
rutas.post('/inicio_sesion', inicio_sesion)

export default rutas