import autentificacionRutas from './rutas/autentificacion.js';
import rutasBase from './rutas/rutas.js';
import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// rutas base
app.use(rutasBase);

// rutas de autentificación
app.use(autentificacionRutas);

export default app;