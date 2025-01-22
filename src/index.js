import { conectarBD } from './bd.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import app from './app.js';

// console.log(__dirname)

// puerto de escucha
const puerto = 3000;

// direccion base
const __dirname = dirname(fileURLToPath(import.meta.url))

// direccion de la carpeta static
app.use(express.static(join(__dirname, "static")))

// direccion de la carpeta vistas
app.set("views", join(__dirname, "vistas"))
app.set("view engine", "ejs")

// app.use(indiceRutas)
// app.use('/api', autenticaciónRutas);

// coneccion a la base de datos
conectarBD();

// iniciacion del puerto de escucha
app.listen(puerto);
console.log("Servidor en puerto", puerto);
