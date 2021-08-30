import lowdb from 'lowdb' //para manejar archivos
import FileSync from 'lowdb/adapters/FileSync'  // me permite indicarle a lowdb que voy a trabajar los file de manera sincrona

const adapter = new FileSync('db.json')

type Task = { //con typescript te permite definir tipos de datos. en este caso TASKS
    id: string
    name: string
    description: string
}
type Schema = { //aca defini otro tipo de dato Schema que contiene a Tasks, esto solo sirve para tener el auto completado
    // cuando quiero escribir codigo...no sirve para validar dato.
    tasks: Task[]
}

let db: lowdb.LowdbSync<Schema>;

export const createConnection = () => {
    const adapter = new FileSync<Schema>('db.json') //indico el nombre del archivo donde voy a guardar los datos y
    // y la estructura de datos Schema
    db = lowdb(adapter)
    db.defaults({ tasks: [] }).write()
}

export const getConnection = () => db;

// getConnection().get('tasks').push({})  en este ejemplo crear algo con el push y dentro de push le indico un objeto {}
// y dentro de ese objeto ya me aparece el autocompletado