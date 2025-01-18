import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import express from 'express';

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
// console.log(__dirname)

app.set("views", join(__dirname, "vistas"))
app.set("view engine", "ejs")

app.get('/', (req, res) => res.render('index'))
app.get('/acerca', (req, res) => res.render('acerca'))
app.get('/contacto', (req, res) => res.render('contacto'))

app.listen(3000)
console.log("Servidor en puerto", 3000)

// console.log("Hola mundo")