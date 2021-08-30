"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //me va permitir inicializar un objeto
const tasks_controller_1 = require("../controllers/tasks.controller");
const router = express_1.Router(); //este router me va a permitir decir ejecuta lo que esta entre parentesis ()
//router.get('/tasks', (req, res) => res.send('hola Gente')) // ejecuto la funcion tipo flecha
router.get('/tasks', tasks_controller_1.getTasks); // ejecuto la funcion tipo flecha
router.get('/tasks/count', (req, res) => res.send('hola Gente')); // total de tarea en la base de datos
router.post('/tasks', (req, res) => res.send('hola Gente')); // Para crear tareas
router.get('/tasks/:id', (req, res) => res.send('hola Gente')); // una unica tarea
router.delete('/tasks/:id', (req, res) => res.send('hola Gente')); // elimina una tarea
router.put('/tasks/:id', (req, res) => res.send('hola Gente')); // para actualizar una unica tarea
exports.default = router;
