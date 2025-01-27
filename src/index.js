import { conectarBD } from './bd.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import app from './app.js';

// puerto de escucha
const puerto = 3000;

// dirección base
const __dirname = dirname(fileURLToPath(import.meta.url))

// imprime la dirección base en consola
// console.log(__dirname)

// dirección de la carpeta static
app.use(express.static(join(__dirname, "static")))

// dirección de la carpeta vistas
app.set("views", join(__dirname, "vistas"))
app.set("view engine", "ejs")

// app.use(indiceRutas)
// app.use('/api', autenticaciónRutas);

// conexión a la base de datos
conectarBD();

// iniciación del puerto de escucha
app.listen(puerto);
console.log("Servidor en puerto", puerto);
