import { Router } from "express";  //me va permitir inicializar un objeto
import { getTasks, createTask, getTask, deleteTask, updateTask, totalTareas } from '../controllers/tasks.controller'

const router = Router() //este router me va a permitir decir ejecuta lo que esta entre parentesis ()
/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: Id autogenerado
 *        name:
 *          type: string
 *          description: nombre de la tarea
 *        description:
 *          type: string
 *          description: descripcion bue.
 *      required:
 *        - name
 *        - description
 *      example:
 *        id: gQBOyGbxcQy6tEp0aZ78X
 *        name: tarea
 *        description: pp
 *    TareaNoEncontrada:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: mensaje de respuesta
 *      example:
 *        msg: Tarea no encontrada
 *
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: id de tarea
 */

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks Endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Retorna la lista de tareas
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: Lista de tarea
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 */
//Traigo todas las tareas
router.get('/tasks', getTasks)
/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: total de tarea en la base de datos
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: total de tarea en la base de datos
 *        content:
 *          text/plain:
 *            schema:
 *              type: integer
 *              example: 220
 *
 */
// total de tarea en la base de datos
router.get('/tasks/count', totalTareas)
/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Para crear tareas
 *    tags: [Tasks]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: retorna si esta todo OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: Algun error en el server
 *
 */
// Para crear tareas
router.post('/tasks', createTask)
/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: retorna una unica tarea
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: retorna si econtro la tarea
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: tarea no encontrada
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TareaNoEncontrada'
 */
// retorna una unica tarea
router.get('/tasks/:id', getTask)
/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: Elimina una tarea
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: respondio ok! se elimino su tarea
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: Tarea no encontrada
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TareaNoEncontrada'
 *
 */
// elimina una tarea
router.delete('/tasks/:id', deleteTask)
/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Modifica una tarea por ID
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: respuesta OK! modifico la tarea
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: Tarea no encontrada
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TareaNoEncontrada'
 *
 */
// para actualizar una unica tarea
router.put('/tasks/:id', updateTask)


export default router

// router.get('/tasks', (req, res) => res.send('hola Gente')) // ejecuto la funcion tipo flecha
// router.get('/tasks/count', (req, res) => res.send('Total tarea')) // total de tarea en la base de datos
// router.post('/tasks', (req, res) => res.send('crear tarea')) // Para crear tareas
// router.get('/tasks/:id', (req, res) => res.send('una unica tarea')) // una unica tarea
// router.delete('/tasks/:id', (req, res) => res.send('elimino tarea')) // elimina una tarea
// router.put('/tasks/:id', (req, res) => res.send('actualizo tareas por id')) // para actualizar una unica tarea