import express from 'express'
import cors from 'cors'
import morgan from 'morgan' //Es un middleware para la captura de solicitudes HTTP para Node. js para su posterior registro y seguimiento
import tasksRoutes from './routes/tasks.routes'
//SWAGGER
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import { options } from './swaggerOptions'

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(cors()) // para que comunicarme entre server
app.use(morgan('dev')) // para que vea la peticiones generadas
app.use(express.json()) //Formato que voy a interpretar los datos que llegan al server

app.use(tasksRoutes) // manera de usar mi ruta nueva

const specs = swaggerJsDoc(options)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app