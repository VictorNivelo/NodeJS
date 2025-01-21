import indiceRutas from './rutas/rutas.js';
import autenticaciónRutas from './rutas/autentificacion.rutas.js';
import { conectarBD } from './bd.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import app from './app.js';
import express from 'express';

// console.log(__dirname)

// direccion de las vistas
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set("views", join(__dirname, "vistas"))
app.set("view engine", "ejs")

app.use(indiceRutas)
app.use('/api', autenticaciónRutas);

app.use(express.static(join(__dirname, "static")))

conectarBD()

app.listen(3000)
console.log("Servidor en puerto", 3000)
