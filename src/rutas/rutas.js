import { Router } from 'express'

const rutas = Router()

// rutas bases
rutas.get('/', (req, res) => res.render('index', { titulo: 'Inicio' }))
rutas.get('/acerca', (req, res) => res.render('acerca'))
rutas.get('/contacto', (req, res) => res.render('contacto'))

// usuario
rutas.get('/perfil', (req, res) => res.render('usuario/perfil'))
rutas.get('/registro', (req, res) => res.render('usuario/registro'))
rutas.get('/inicio_sesion', (req, res) => res.render('usuario/inicio_sesion'))

// administrador
rutas.get('/administrador', (req, res) => res.render('administrador/panel_administrador'))

// crud
rutas.get('/usuario', (req, res) => res.render('crud/usuario'))
rutas.get('/producto', (req, res) => res.render('crud/producto'))

// errores
rutas.get('/404', (req, res) => res.render('error/404'))
rutas.get('/500', (req, res) => res.render('error/500'))

export default rutas