import app from './app'
import { createConnection } from './db'

createConnection()
app.listen(app.get('port'))
console.log('Server Levantado puerto ', app.get('port'))