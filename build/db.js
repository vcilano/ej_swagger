"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = void 0;
const lowdb_1 = __importDefault(require("lowdb")); //para manejar archivos
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync")); // me permite indicarle a lowdb que voy a trabajar los file de manera sincrona
//Creo instancia de base de datos en un archivo json
const createConnection = () => {
    const adapter = new FileSync_1.default('db.json'); //indico el nombre del archivo donde voy a guardar los datos.
    const baseDb = new lowdb_1.default(adapter);
};
exports.createConnection = createConnection;
