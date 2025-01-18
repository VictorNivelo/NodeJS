import indiceRutas from './rutas/rutas.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import express from 'express';

const app = express()
// console.log(__dirname)

// direccion de las vistas
const __dirname = dirname(fileURLToPath(import.meta.url))
app.set("views", join(__dirname, "vistas"))
app.set("view engine", "ejs")
app.use(indiceRutas)

app.use(express.static(join(__dirname, "static")))

app.listen(3000)
console.log("Servidor en puerto", 3000)
