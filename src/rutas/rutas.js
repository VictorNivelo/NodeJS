import { Router } from 'express'

const rutas = Router()

// rutas bases
rutas.get('/', (req, res) => res.render('index', { titulo: 'Inicio' }))
rutas.get('/acerca', (req, res) => res.render('acerca'))
rutas.get('/contacto', (req, res) => res.render('contacto'))

// usuario
rutas.get('/perfil', (req, res) => res.render('perfil'))
rutas.get('/registro', (req, res) => res.render('registro'))
rutas.get('/inicio_sesion', (req, res) => res.render('inicio_sesion'))

// administrador
rutas.get('/administrador', (req, res) => res.render('administrador'))

// crud
rutas.get('/usuario', (req, res) => res.render('usuario'))
rutas.get('/producto', (req, res) => res.render('producto'))

// errores
rutas.get('/404', (req, res) => res.render('404'))
rutas.get('/500', (req, res) => res.render('500'))

export default rutas