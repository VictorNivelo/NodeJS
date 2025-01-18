import { Router } from 'express'

const router = Router()

// rutas
router.get('/', (req, res) => res.render('index', { titulo: 'Inicio' }))
router.get('/acerca', (req, res) => res.render('acerca'))
router.get('/contacto', (req, res) => res.render('contacto'))
router.get('/registro', (req, res) => res.render('registro'))
router.get('/inicio_sesion', (req, res) => res.render('inicio_sesion'))

export default router