"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.listen(4000, () => console.log('Server is running 4000, please initial yours testing'));
// informando o express que ele vai receber requisições em Json.
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.router);
