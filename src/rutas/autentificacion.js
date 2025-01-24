import { registro, inicio_sesion, cerrar_sesion, perfil } from '../controlador/autentificacion_controlador.js'
import { autorizacion_requerida } from '../middlewares/validar_token.js'
import { Router } from 'express'

const rutas = Router()

// obtener
rutas.get('/registro', registro)
rutas.get('/inicio_sesion', inicio_sesion)

// enviar
rutas.post('/registro', registro);

rutas.post('/inicio_sesion', inicio_sesion);

rutas.post('/cerrar_sesion', cerrar_sesion);

rutas.get('/perfil', autorizacion_requerida, perfil);

// rutas.post('/perfil', autorizacion_requerida, perfil);

// exportar las rutas
export default rutas