import express from "express";
import { router } from "./routes";
import cors from 'cors';

const app = express();


app.listen(4000, () => console.log('Server is running 4000, please initial yours testing'));


// informando o express que ele vai receber requisições em Json.
app.use(express.json());

app.use(cors());

app.use(router);