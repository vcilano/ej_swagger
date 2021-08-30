"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan")); //Es un middleware para la captura de solicitudes HTTP para Node. js para su posterior registro y seguimiento
const tasks_routes_1 = __importDefault(require("./routes/tasks.routes"));
const app = express_1.default();
app.set('port', process.env.PORT || 5000);
app.use(cors_1.default()); // para que comunicarme entre server
app.use(morgan_1.default('dev')); // para que vea la peticiones generadas
app.use(express_1.default.json()); //formato que voy a interpretar los datos.
app.use(tasks_routes_1.default); // manera de usar mi ruta nueva
exports.default = app;
