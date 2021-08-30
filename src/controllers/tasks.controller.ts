
//LO UTILIZO PARA REALIZAR LOS PEDIDOS A LA BASE DE DATOS

import { Handler } from 'express' //Se utiliza para que typeScript sepa que utilizo parametros de otra funcion
import { getConnection } from '../db' // tengo la conexion a la base de datos
import { nanoid } from 'nanoid'

// export const getTasks: Handler = (req, res) => res.send('Hola gente') //handler sabe que req y res es una funcion de express
export const getTasks: Handler = (req, res) => {
    const data = getConnection().get("tasks").value() //Creo la conexion a la base y obtengo el arreglo tasks de mi schema
    return res.json(data)
}

export const createTask: Handler = (req, res) => {
    const { name, description } = req.body //obtengo de la API que me envian los datos
    const newTasks = {
        name,
        description,
        id: nanoid() //creo un ID aleatorio
    }
    try {
        // Guardo la tarea en mi json
        const respuesta = getConnection().get('tasks').push(newTasks).write()
        return res.json(respuesta)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getTask: Handler = (req, res) => {
    try {
        const { id } = req.params //obtengo los parametros de mi API
        console.log('tarea id :', id)
        const valorTarea = getConnection()
            .get("tasks")
            .find({ id: id })
            .value(); //busco si existe la tarea
        if (!valorTarea) {
            return res.status(404).json({ msg: "Tarea no encontrada" })
        }
        res.json(valorTarea);

    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteTask: Handler = (req, res) => {
    try {
        const { id } = req.params
        const valorTarea = getConnection()
            .get("tasks")
            .find({ id: id })
            .value(); //busco si existe la tarea
        if (!valorTarea) {
            return res.status(404).json({ msg: "Tarea a eliminar no encontrada" })
        }
        const tareaEliminada = getConnection().get("tasks").remove({ id: id }).write(); //una vez que obtiene el dato, con el write guardo el cambio.
        if (!tareaEliminada) {
            return res.status(404).json({ msg: "se borro la tarea ", id });
        }
        res.send(tareaEliminada);

    } catch (error) {
        res.status(500).send(error);
    }
}
export const updateTask: Handler = (req, res) => {
    try {
        const { id } = req.params
        const valorTarea = getConnection()
            .get("tasks")
            .find({ id: id })
            .value(); //busco si existe la tarea
        if (!valorTarea) {
            return res.status(404).json({ msg: "Tarea no encontrada" })
        }
        const tareaModif = getConnection().get("tasks").find({ id: id }).assign(req.body).write();
        return res.json(tareaModif);

    } catch (error) {
        res.status(500).send(error);

    }
}

export const totalTareas: Handler = (req, res) => {
    try {
        console.log("estoy en COUNT")
        const totTarea = getConnection().get("tasks").value().length;
        return res.json({ msg: " Total tareas ", totTarea });
    } catch (error) {
        res.status(500).send(error);

    }

}