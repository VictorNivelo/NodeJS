import autentificacionRutas from './rutas/autentificacion.rutas.js';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// rutas de autentificación
app.use(autentificacionRutas);

export default app;