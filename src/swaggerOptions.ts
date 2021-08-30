export const options = {
    definition: {
        openapi: "3.0.0", //version que uso de swagger,
        info: {
            title: 'APIs Tareas',
            version: '1.0.0',
            description: 'Probando sagger',
            contact: {
                "name": "SouthSweel",
                "url": "http://www.infobae.com",
                "email": "vicente.cilano@gmail.com",
            },
        },
        servers: [{ //tengo que indicar donde va esta mis APIs
            url: "http://localhost:3000",
            description: "server Desarrollo"
        }]
    },
    apis: ["./src/routes/*.ts"] //le indico de donde va leer la documentacion
}